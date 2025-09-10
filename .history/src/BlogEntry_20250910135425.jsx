function BlogEntry(props) {
  const buttonLabel = "Click me";
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.summary}</p>
      <button>{buttonLabel}</button>
    </div>
  );
}
export default BlogEntry;
