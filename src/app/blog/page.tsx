"use client";
import { useState } from "react";

export default function Blob() {
  const [user, setUser] = useState("This is Clinet components");
  return (
    <div style={{ background: "green", height: "100%" }}>
      <div>
        <div>About Blob : Clinet components</div>
        <h2>{user}</h2>
      </div>
    </div>
  );
}
