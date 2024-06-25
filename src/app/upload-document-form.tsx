"use client";

import React, { ReactNode } from "react";
import { Loader, LoaderCircle } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createDocument } from "../../convex/documents";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import LoadingButton from "@/components/ui/loading-button";

const formSchema = z.object({
  title: z.string().min(2).max(250),
  file: z.instanceof(File),
});

const UploadDocumentForm = ({ onUpload }: { onUpload: () => void }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = await generateUploadUrl();

    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": values.file.type },
      body: values.file,
    });
    const { storageId } = await result.json();
    await createDocument({
      title: values.title,
      fileId: storageId as string,
    });
    onUpload();
  }
  const createDocument = useMutation(api.documents.createDocument);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Upload a document with doc,txt,pdf for best results"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Upload File</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept=".txt,.xml,.doc"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingState={"Uploading..."}
          defaultState={"Upload"}
        />
      </form>
    </Form>
  );
};

export default UploadDocumentForm;
