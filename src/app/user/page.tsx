"use client";
import { useRouter } from "next/navigation";
import { type } from "os";
import React, { useState } from "react";

async function update(id: string, refresh: any) {
  await fetch(`https://api.example.com/todo/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: true }),
  });
  refresh();
}

// q: What is the capital on uk?
// a: London
// q: What is the capital on india?
// a: New Delhi

export default function Todo() {
  const [todo, setTodo] = useState("true");

  const router = useRouter();
  for (let i = 0; i < 1000000000; i++) {
    console.log(i);
  }
  return (
    <div>
      <p>TO Do </p>
      {/* h1 with inline style */}
      <h1 style={{ color: "red" }}>Hello World</h1>
      <input
        type="checkbox"
        id="id"
        name="id"
        checked={true}
        onChange={(e) => update(todo, router.refresh)}
      />
    </div>
  );
}
