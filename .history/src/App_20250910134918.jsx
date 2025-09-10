function App() {
  return (
    <div>
      <h2>My blog</h2>
      <BlogEntry title="Mai is sleepy" summary="lorem ipsum dolor sit amet" />
      <BlogEntry title="Mai is bored" summary="lorem ipsum dolor sit amet" />
      <BlogEntry title="Mai is coding" summary="lorem ipsum dolor sit amet" />
    </div>
  );
}
function BlogEntry(props) {
  {
    title: "Mai is sleepy";
    summary: "lorem ipsum dolor sit amet";
  }
  return (
    <div>
      <h1>Hello Mai</h1>
      <p>lorem ipsum dolor sit amet</p>
      <button>Click me</button>
    </div>
  );
}
export default App;
