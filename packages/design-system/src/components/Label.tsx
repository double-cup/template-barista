import React from "react";

interface LabelProps {
  children?: React.ReactNode;
}

export function Label({ children }: LabelProps) {
  return <label>{children}</label>;
}
