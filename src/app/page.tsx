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
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments, {});
  const createDocument = useMutation(api.documents.createDocument);

  return (
    <main className="flex pt-10  min-h-screen flex-col items-center justify-between">
      <Authenticated>
        <Button
          variant={"default"}
          size={"sm"}
          onClick={() => createDocument({ title: "Testing mutations" })}
        >
          CLICK ME
        </Button>
        {documents?.map((document) => (
          <ul key={document._id}>
            <li>{document.title}</li>
          </ul>
        ))}
      </Authenticated>
    </main>
  );
}
