import Link from "next/link";

const NewsList = ({ news }) => {
  return (
    <>
      <ul className="news-list">
        {news.map((newsItem, i) => (
          <li key={i}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span></span>
              {newsItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsList;
