import { LoaderCircle } from "lucide-react";
import React, { ReactNode } from "react";
import { Button } from "./button";

const LoadingButton = ({
  isLoading,
  loadingState,
  defaultState,
}: {
  isLoading: boolean;
  loadingState: ReactNode;
  defaultState: ReactNode;
}) => {
  return (
    <Button
      type="submit"
      className="flex items-center gap-2"
      disabled={isLoading}
    >
      {isLoading && <LoaderCircle className="animate-spin" />}
      {isLoading ? loadingState : defaultState}
    </Button>
  );
};

export default LoadingButton;
