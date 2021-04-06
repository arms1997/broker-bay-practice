import axios from "axios";
import { useState, useEffect } from "react";

import NewsItem from "./NewsItem";

export default function NewsContainer({}) {
  const [newsData, set] = useState();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=7282f18fd8814645a4371f9028c9e027"
      )
      .then(({ data }) => {
        set(data);
      });
  });

  const newsList =
    newsData &&
    newsData.map((news) => {
      return <NewsItem news={{ ...news }} />;
    });

  return <div className="NewsContainer">{newsData && newsList}</div>;
}
