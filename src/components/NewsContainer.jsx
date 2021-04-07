import useResize from "../hooks/useResize";
import NewsItem from "./NewsItem";
import "./styles/NewsContainer.scss";

export default function NewsContainer({ newsData, setNews }) {
  const { isMobile } = useResize();

  const newsList =
    newsData &&
    newsData.map((news, index) => {
      return (
        <NewsItem
          news={{ ...news }}
          key={index}
          onClick={() => setNews(news)}
        />
      );
    });

  return (
    <div className={isMobile ? "NewsContainer-mobile" : "NewsContainer"}>
      {newsData && newsList}
    </div>
  );
}
