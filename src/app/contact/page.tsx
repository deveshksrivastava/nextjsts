"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import HeaderLink from "../../components/HeaderLink";

export default function Contact() {
  const router = useRouter();

  const post = {
    country: "India",
    title: "IndiaTitle",
  };
  return (
    <div>
      <h1>contact page</h1>
      <h2>Linking page</h2>
      <br />

      {/* Clinet and Server component below */}
      <Header />
      <HeaderLink />

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
      {/* adding button component */}
      <Button />
    </div>
  );
}
