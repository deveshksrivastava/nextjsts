import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function ContactLayout({ children, ...props }: Props) {
  return (
    <div>
      <title>ContactLayout</title>
      {children}
    </div>
  );
}
