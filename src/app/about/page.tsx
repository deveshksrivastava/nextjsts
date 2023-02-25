const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  return data.json();
};

const getMoreData = async () => {
  const res = await fetch("https://www.reddit.com/.json");

  return res.json();
};

async function About() {
  const result = await getData();
  // wow! No hooks on server components!
  const dataMore = await getMoreData();

  return (
    <div style={{ background: "red", height: "100%" }}>
      <div>
        <div>
          <h1>About page test-API calling on server side.</h1>
          <h1>{dataMore.kind}</h1>
          {result.title}
        </div>
      </div>
    </div>
  );
}

export default About;
