import { getAllPosts } from "../../lib/cms";

const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

export default function Reporting() {
  const post = delay(500);
  const posts = getAllPosts();

  return <div>Reporting</div>;
}
