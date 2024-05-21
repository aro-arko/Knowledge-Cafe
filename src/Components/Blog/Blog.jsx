import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    id,
    cover_title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="space-y-2 mb-8">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="w-14 rounded-full mr-3" src={author_img} alt="" />
          <div>
            <h3 className="font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-2">{reading_time} min read</p>
          <button
            className="border-none"
            onClick={() => handleAddToBookmark(blog)}
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-semibold">{cover_title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleReadingTime(reading_time, id)}
        className="text-[#6047EC] font-semibold border-none"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func,
};
export default Blog;
