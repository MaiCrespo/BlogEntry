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
  const buttonLabel = "Click me";
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.summary}</p>
      <button>Click me</button>
    </div>
  );
}
export default App;
