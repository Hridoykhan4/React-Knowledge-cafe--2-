import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };

  const handleAddToBookMark = (blog) => {
    setBookmarks([...bookmarks, blog]);
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
