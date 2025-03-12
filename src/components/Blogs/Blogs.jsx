import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { getStoredBlogs } from "../../utilities/localStorage";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead, setBookmarks }) => {
  const [blogs, setBlogs] = useState([]);
  const [tempBlog, setTempBlog] = useState([]);

  useEffect(() => {
    if (blogs.length) {
      const storedBlog = getStoredBlogs();
      const saveBlog = [];
      for (const id of storedBlog) {
        const blog = blogs.find((blog) => blog.id === id);
        saveBlog.push(blog);
      }
      setBookmarks(saveBlog);
    }
  }, [tempBlog]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data), setTempBlog(data);
      });
  }, []);

  const handleSearch = (e) => {
    const target = e.target.value.toLowerCase();
    const blogStore = [];
    if (target) {
      for (const e of tempBlog) {
        if (e.author.toLowerCase().includes(target)) {
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
      <h2 className="sm:text-4xl text-xl">
        Total Blogs Counted: {blogs.length}
      </h2>
      <input
        type="text"
        placeholder="Search By Blogger's Name"
        onChange={(e) => handleSearch(e)}
        className="input input-primary mt-6 py-5"
      />
      <div className="flex flex-col space-y-4 md:gap-14 m-4 gap-10">
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
  setBookmarks: PropTypes.func,
};
export default Blogs;
