import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  const [tempBlog, setTempBlog] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => (setBlogs(data), setTempBlog(data)));
  }, []);

  const handleSearch = (e) => {
    const targetValue = e.target.value;
    const blogStore = [];
    if (targetValue) {
      for (const e of tempBlog) {
        if (e.title.toLowerCase().includes(targetValue)) {
          blogStore.push(e);
        }
      }
      setBlogs(blogStore);
    } else {
      setBlogs(tempBlog);
    }
  };

  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl">Total Blogs Counted: {blogs.length}</h2>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => handleSearch(e)}
        className="input input-primary mt-6 py-5"
      />
      <div className="flex flex-col md:gap-14 m-4">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handleAddToBookMark={handleAddToBookMark}
            handleMarkAsRead={handleMarkAsRead}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blogs;
