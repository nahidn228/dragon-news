import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(news);
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home </h2>
      <p className="text-gray-400 text-sm mb-4">
        {news.length} News Found in this category
      </p>

      <div className="card">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
