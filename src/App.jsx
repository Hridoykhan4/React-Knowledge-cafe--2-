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
    setReadingTime((prev) => prev + time);

    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
    toast.success("Thanks For Reading!!!");
  };

  const handleAddToBookMark = (blog) => {
    const count = bookmarks.filter(
      (bookmark) => bookmark.id === blog.id
    ).length;
    if (count >= 2) {
      toast.error("Can Not Read an Article More than 2 Times");
    } else {
      setBookmarks([...bookmarks, blog]);
      toast.success("Successfully BookMarked!");
    }
  };

  return (
    <>
      <div className="bg-lime-100">
        <Header></Header>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-4  w-11/12 mx-auto my-4 justify-center">
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
