import NewsList from "@/components/newsList";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;

// clientSide-example
// "use client";

// import NewsList from "@/components/newsList";
// import { useEffect, useState } from "react";

// const NewsPage = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   const [news, setNews] = useState([]);
//   useEffect(() => {
//     const fetchNews = async () => {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:8080/news");
//       if (!response.ok) {
//         setError("Faild to fetch news!");
//         setIsLoading(false);
//       }
//       const news = await response.json();

//       setIsLoading(false);
//       setNews(news);
//     };

//     fetchNews();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   let newsContent;

//   if (news) {
//     newsContent = <NewsList news={news} />;
//   }

//   return (
//     <>
//       <h1>News Page</h1>
//       {newsContent}
//     </>
//   );
// };

// export default NewsPage;
