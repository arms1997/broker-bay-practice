export default function NewsPage({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.source.name}</p>
      <p>{news.publishedAt}</p>
    </div>
  );
}
