import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData(initial) {
  const [currentNews, setCurrentNews] = useState(null);
  const [newsData, set] = useState(null);

  const updateNews = (news) => setCurrentNews(news);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=7282f18fd8814645a4371f9028c9e027"
      )
      .then(({ data: { articles } }) => set(articles))
      .catch((err) => console.error(err));
  }, []);

  return { newsData, currentNews, updateNews };
}
