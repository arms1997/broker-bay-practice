import "./styles/NewsItem.scss";

export default function NewsItem({ news }) {
  return (
    <article className="NewsItem__content">
      <img
        className="NewsItem__content-image"
        src={news.urlToImage}
        alt="News"
      />
      <div className="NewsItem__content-text">
        <p>{news.title}</p>
        <p>{news.publishedAt}</p>
      </div>
    </article>
  );
}
