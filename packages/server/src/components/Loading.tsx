import React from "react";

interface LoadingProps {
  children?: React.ReactNode;
}

export function Loading({ children }: LoadingProps) {
  return <div>{children ?? "Loading..."}</div>;
}
