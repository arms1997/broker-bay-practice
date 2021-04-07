import axios from "axios";
import { useState, useEffect } from "react";

import NewsItem from "./NewsItem";
import "./styles/NewsContainer.scss";

export default function NewsContainer({ newsData, setNews }) {
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

  return <div className="NewsContainer">{newsData && newsList}</div>;
}
