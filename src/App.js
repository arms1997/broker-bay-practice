import { useState } from "react";

import "./App.css";
import NewsContainer from "./components/NewsContainer";
import NewsPage from "./components/NewsPage";

function App() {
  const [news, setNews] = useState(null);

  return (
    <div className="App">
      {news ? <NewsPage news={news} /> : <NewsContainer setNews={setNews} />}
    </div>
  );
}

export default App;
