import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href={"contact"}>Go to Nav bar page</Link>
    </div>
  );
}
