"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments, {});
  const createDocument = useMutation(api.documents.createDocument);

  return (
    <main className="flex pt-10 pr-10 min-h-screen flex-col items-end justify-start">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button onClick={() => createDocument({ title: "Testing mutations" })}>
          CLICK ME
        </button>
        {documents?.map((document) => (
          <ul key={document._id}>
            <li>{document.title}</li>
          </ul>
        ))}
      </Authenticated>
    </main>
  );
}
