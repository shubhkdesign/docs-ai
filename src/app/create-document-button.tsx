"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { createDocument } from "../../convex/documents";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const CreateDocumentButton = () => {
  const createDocument = useMutation(api.documents.createDocument);

  return (
    <Button
      onClick={() => {
        createDocument({ title: "New Document" });
      }}
    >
      Upload Documents
    </Button>
  );
};

export default CreateDocumentButton;
