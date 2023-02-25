"use client";
import { useState, useEffect } from "react";

import dataJson from "./data.json";
import SWR from "./SWR";

function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.reddit.com/.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>Client-side data fetching with useEffect</h1>
      <h3>{data.data.children[0].data.title}</h3>
      <SWR />
    </div>
  );
}

export default Profile;
