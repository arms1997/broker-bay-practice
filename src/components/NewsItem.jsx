export default function NewsItem({ news }) {
  return (
    <article>
      <img src={news.imageSrc} />
      <div>
        <p>{news.title}</p>
        <p>{news.author}</p>
        <p>{news.date}</p>
      </div>
    </article>
  );
}
