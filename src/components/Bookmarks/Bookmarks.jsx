import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 h-fit my-4 rounded p-2">
      <div className="text-center my-3">
        <h3 className="sm:text-4xl text-2xl underline underline-offset-4">
          Reading Time: {readingTime}
        </h3>
      </div>

      <h2 className="sm:text-3xl text-xl text-center">
        BookMarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
