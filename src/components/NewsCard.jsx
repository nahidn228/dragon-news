import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { singleNews } = props || {};
  const { author, title, thumbnail_url, rating, total_view, details } =
    singleNews;
  const publishedDate = author?.published_date?.split(" ")[0] || "Unknown date";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
      <div className="p-4 flex items-center gap-2">
        <img
          src={author?.img}
          alt={author?.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold">
            {author?.name || "Unknown Author"}
          </h3>
          <p className="text-xs text-gray-500">{publishedDate}</p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="px-4 pb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="w-full h-40 object-cover rounded-lg"
        />
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{details}</p>
        <button className="text-red-600 font-semibold mt-2">Read More</button>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-orange-500 gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-sm text-gray-600 ml-2">
            {rating?.number || "N/A"}
          </p>
          <div className="flex items-center text-gray-600 gap-1">
            <FaEye />
            <p className="text-sm">{total_view || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
