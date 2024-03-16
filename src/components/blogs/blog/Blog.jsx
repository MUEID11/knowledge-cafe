import PropTypes from "prop-types";
import { MdOutlineBookmarkAdd } from "react-icons/md";
const Blog = ({ blog, handleAddBs, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8 rounded-xl"
        src={cover}
        alt={`cover picture of title${title}`}
      />
      <div className="flex justify-between mb-6">
        <div className="flex">
          <img className="w-14 mr-6" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBs(blog)}
            className="ml-2 text-2xl text-green-500"
          >
            <MdOutlineBookmarkAdd />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href=""></a>#{hash}
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)} className="font-bold text-blue-500 underline">mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBs: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
