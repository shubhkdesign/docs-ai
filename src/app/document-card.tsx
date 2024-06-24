import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";

export const DocumentCard = ({ document }: { document: Doc<"documents"> }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription>{document._creationTime}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant={"secondary"}>View</Button>
      </CardContent>
    </Card>
  );
};
