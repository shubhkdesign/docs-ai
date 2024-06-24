"use client";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";
import { DocumentCard } from "./document-card";
import CreateDocumentButton from "./create-document-button";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments, {});

  return (
    <main className="p-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">My Documents</h1>
        <CreateDocumentButton />
      </div>
      <div className="grid pt-6 grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-2">
        {documents?.map((document) => (
          <DocumentCard key={document._id} document={document} />
        ))}
      </div>
    </main>
  );
}
