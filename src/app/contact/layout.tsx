import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // any props that come into the component
}

export default function ContactLayout({ children }: Props) {
  return (
    <div>
      <title>Contact**Layout</title>
      {children}
    </div>
  );
}
