import moment from "moment";

import "./styles/NewsItem.scss";

export default function NewsItem({ news, onClick }) {
  return (
    <article className="NewsItem__content" onClick={onClick}>
      <img
        className="NewsItem__content-image"
        src={news.urlToImage}
        alt="News"
      />
      <div className="NewsItem__content-text">
        <p>{news.title}</p>
        <p>{moment(news.publishedAt).format("YYYY-MM-DD")}</p>
      </div>
    </article>
  );
}
