import Link from "next/link";
import styles from "./notes.module.css";
import CreateUser from "./CreateUser";

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

type MetadataUser = {
  id: number;
  username: string;
  email: string;
  website: string;
}[];

async function getUser(): Promise<MetadataUser> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // this will refetch the data from the server every time, equivalent to getServerSide props
  });
  const data = await res.json();

  return data;
}

export default async function NotesPage() {
  const users = await getUser();
  // console.log(users);

  return (
    <div>
      <h1>Notes Movie list</h1>
      {/* {JSON.stringify(notes)} */}
      <div className={styles.grid}>
        {users?.map((item) => {
          return <Note key={item.id} note={item} />;
        })}
      </div>

      <CreateUser />
    </div>
  );
}

function Note({ note }: any) {
  const { id, username, email, website } = note || {};
  // console.log(note);

  return (
    <Link href={`user/note/${id}`}>
      <div className={styles.note}>
        <h2>{username}</h2>
        <h5>{email}</h5>
        <p>{website}</p>
      </div>
    </Link>
  );
}
