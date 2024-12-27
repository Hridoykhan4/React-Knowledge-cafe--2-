import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    hashtags,
    reading_time,
    author_img,
    author,
    posted_date,
    id,
  } = blog;
  return (
    <div className="space-y-3">
      <div className="w-full mt-8">
        <img
          src={cover}
          className="rounded-xl w-full h-full object-cover"
          alt={`Cover Picture of the title ${title}`}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img src={author_img} alt="" className="w-14" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 gap-2">
          <button className="text-gray-800 font-semibold bg-blue-300 p-2 rounded">
            {reading_time} min read
          </button>
          <button className="text-2xl bg-gray-400 rounded-full p-2 text-red-500">
            <FaBookmark onClick={() => handleAddToBookMark(blog)} />
          </button>
        </div>
      </div>
      <h2 className="md:text-4xl text-2xl font-semibold tracking-wide">
        {title}
      </h2>
      <div className="flex gap-4">
        <p className="text-gray-800 text-xl">{hashtags[0]}</p>
        <p className="text-gray-800 text-xl">{hashtags[1]}</p>
        <p className="text-gray-800 text-xl">{hashtags[2]}</p>
      </div>
      <button
        className="underline underline-offset-2 text-sky-700 font-semibold"
        onClick={() => handleMarkAsRead(reading_time, id)}
      >
        Mark As Read{" "}
      </button>{" "}
      <span className="text-red-800">❤</span>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
