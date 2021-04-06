export default function NewsPage({ news }) {
  return (
    <div>
      <header>
        <h2>{news.title}</h2>
        <div>
          <p>{news.source.name}</p>
          <p>{news.publishedAt}</p>
        </div>
      </header>
      <div>
        <p>{news.content}</p>
        <a href={news.url} target="__blank">
          Click Here
        </a>
      </div>
    </div>
  );
}
