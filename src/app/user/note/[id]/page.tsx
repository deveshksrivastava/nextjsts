import React from "react";

import styles from "../notes.module.css";

async function getNote(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  //   console.log(data);
  return data;
}

export default async function NotePage({ params }: any) {
  //   console.log("id", params);
  const user = await getNote(params.id);

  return (
    <div>
      <h1>notes/{user.id}</h1>
      <div className={styles.note}>
        <h3>{user.username}</h3>
        <h5>{user.email}</h5>
        <p>{user.website}</p>
      </div>
    </div>
  );
}
