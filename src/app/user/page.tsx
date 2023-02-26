"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

async function update(id: string, refresh: any) {
  await fetch(`https://api.example.com/todo/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: true }),
  });
  refresh();
}

export default function Todo() {
  const [todo, setTodo] = useState("true");
  const router = useRouter();
  return (
    <div>
      <p>TO Do </p>
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
