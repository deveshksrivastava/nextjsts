import { Suspense } from "react";
import { getAllPosts } from "../../../lib/cms";

const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

export default async function ReportPage() {
  const post = delay(500);
  const posts = await getAllPosts();
  return (
    <>
      <div>Report APPLICATION</div>
    </>
  );
}
