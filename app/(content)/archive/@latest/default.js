import NewsList from "@/components/newsList";
import { getLatestNews } from "@/lib/news";

const ArchiveLatestPage = async () => {
  const news = await getLatestNews();
  return (
    <>
      <h2>ArchiveLatestPage</h2>
      <NewsList news={news} />
    </>
  );
};

export default ArchiveLatestPage;

// this is the default when using parallel routs if there is nothing to show (when the other parallel route is diving in the [year] page)
