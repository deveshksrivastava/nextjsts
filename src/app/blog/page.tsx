"use client";
import Reporting from "@/components/Reporting";
import { Suspense, useState } from "react";
import Loading from "../loadingex/loading";

export default function Blob() {
  const [user, setUser] = useState("This is Clinet components");
  return (
    <div style={{ background: "green", height: "100%" }}>
      <div>
        <div>About Blob : Clinet components</div>
        <h2>{user}</h2>
        <Suspense fallback={<Loading />}>
          <Reporting />
        </Suspense>
      </div>
    </div>
  );
}

// export default function getStaticParams() {
//   return {
//     slug: [{ slug: "learn to slug" }, { slug: "Angular vs React" }],
//   };
// }
