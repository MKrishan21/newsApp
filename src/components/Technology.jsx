import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const Technology = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  useEffect(() => {
    getNews(currentPage);
  }, [currentPage]);
  //articles
  const getNews = async (page) => {
    const respones = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e9bfa93117e3442bbbf9e35c7fcf4ac2&page=${page}&pageSize=${itemsPerPage}`
    );
    const data = await respones.json();
    console.log(data);
    setNewsItems(data.articles);
    setTotalResults(data.totalResults);
  };

  let totalPages = Math.ceil(totalResults / itemsPerPage);
  if (totalPages>10){
    totalPages=10
  }

  return (
    <div className="w-screen">
      <div className="grid md:grid-cols-2 gap-2">
        {newsItems &&
          newsItems.map((news) => (
            <NewsItem
              key={news.url}
              image={news.urlToImage}
              title={news.title}
              desc={news.description}
              link={news.url}
            />
          ))}
      </div>

      <div className="w-screen mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-2 px-2 md:px-4 py-2 rounded ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Technology