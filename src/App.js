import useApplicationData from "./hooks/useApplicationData";
import "./App.css";
import NewsContainer from "./components/NewsContainer";
import NewsPage from "./components/NewsPage";

function App() {
  const { newsData, currentNews, updateNews } = useApplicationData();

  return (
    <div className="App">
      {currentNews ? (
        <NewsPage news={currentNews} />
      ) : (
        <NewsContainer newsData={newsData} setNews={updateNews} />
      )}
    </div>
  );
}

export default App;
