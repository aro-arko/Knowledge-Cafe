import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 m-4">
      <div className="p-5 bg-purple-100 border-2 border-purple-900 mb-4 rounded-md">
        <h2 className="text-[#6047EC] font-bold text-2xl ml-3">
          Spent time on read : {readingTime} min
        </h2>
      </div>
      <div className="bg-[#f3f3f3] rounded-lg p-4">
        <h3 className="text-2xl font-bold ml-5">
          Bookmarks: {bookmarks.length}
        </h3>

        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
