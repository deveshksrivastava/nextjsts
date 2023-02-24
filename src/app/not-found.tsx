// app/not-found.js

import Image from "next/image";
// import NotFound from "../public/not-found.png";

export default function NotFound() {
  return (
    <>
      {/* <Image src={NotFound} alt="Not found error graphic" /> */}
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
