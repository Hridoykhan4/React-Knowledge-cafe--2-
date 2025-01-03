import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import { toast } from "react-toastify";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time, id) => {
    // setReadingTime(readingTime + time);
    setReadingTime((prev) => prev + time);

    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };

  const handleAddToBookMark = (blog) => {
    const isExist = bookmarks.find((bookmark) => bookmark.id === blog.id);
    isExist
      ? toast("Can Not Read an Article Multiple Times")
      : (setBookmarks([...bookmarks, blog]), toast("Successfully Added"));
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-4  w-11/12 mx-auto my-4 justify-center">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookMark={handleAddToBookMark}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
