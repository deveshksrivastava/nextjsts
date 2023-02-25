import React from "react";
import useSWR from "swr";

// const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());
function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

function SWR() {
  const { data, error } = useSWR("https://www.reddit.com/.json", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h3>{data.data.children[0].data.subreddit}</h3>
    </div>
  );
}

export default SWR;
