export default function Post() {
  return (
    <div>
      <h1>Slug page</h1>
      {/* <h1>{slug}</h1> */}
      {/* <p>This is a static page with dynamic parameter {slug}</p> */}
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "hello-world" } },
//       { params: { slug: "about-us" } },
//     ],
//     fallback: false,
//   };
// }
