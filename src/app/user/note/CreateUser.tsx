"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateUser() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 11,
        username,
        email,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setUserName("");
    setEmail("");

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <textarea
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Create User</button>
    </form>
  );
}
