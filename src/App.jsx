import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const removeBookMarks = bookmarks.filter((bookmark) => bookmark.id != id);
    setBookmarks(removeBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md: flex lg:flex justify-between max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
