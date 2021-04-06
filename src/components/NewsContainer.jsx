import axios from "axios";
import { useState, useEffect } from "react";

import NewsItem from "./NewsItem";
import "./styles/NewsContainer.scss";

export default function NewsContainer({}) {
  const [newsData, set] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=7282f18fd8814645a4371f9028c9e027"
      )
      .then(({ data: { articles } }) => {
        console.log(articles);
        set(articles);
      })
      .catch((err) => console.error(err));
  }, []);

  const newsList =
    newsData &&
    newsData.map((news, index) => {
      return <NewsItem news={{ ...news }} key={index} />;
    });

  return <div className="NewsContainer">{newsData && newsList}</div>;
}
