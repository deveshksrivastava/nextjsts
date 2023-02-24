"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const post = {
    country: "India",
    title: "IndiaTitle",
  };
  return (
    <div>
      <h1>contact page</h1>
      <h4>Linking page</h4>
      {/* GO HOME PAGE  */}
      <div>
        <Link href="/">Home</Link>
      </div>
      {/* GO BLOG PAGE  */}
      <div>
        <Link href="/blog">Blog</Link>
      </div>
      {/* DYNAMIC ROUTING */}
      <div>
        <Link href={`/blog/${post.title}`}>Post(dynamic routing)</Link>
      </div>
      {/* DYNAMIC ROUTING WITH CODING*/}
      <button type="button" onClick={() => router.push("/blog")}>
        Blog - DYNAMIC ROUTING WITH CODING*
      </button>
    </div>
  );
}
