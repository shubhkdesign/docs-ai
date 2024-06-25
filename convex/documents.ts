import { error } from "console";
import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const getDocuments = query({
  async handler(ctx, args) {
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

    if (!userId) {
      return [];
    }
    return await ctx.db
      .query("documents")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", userId))
      .collect();
  },
});

export const createDocument = mutation({
  args: {
    title: v.string(),
    fileId: v.string(),
  },
  async handler(ctx, args) {
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

    if (!userId) {
      throw new ConvexError("Not authenticated");
    }

    await ctx.db.insert("documents", {
      title: args.title,
      tokenIdentifier: userId,
      fileId: args.fileId,
    });
  },
});
