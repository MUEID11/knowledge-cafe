import Bookmark from "./Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks,readingTime}) => {
  return (
    <>
      <div className="md:w-1/3 bg-green-100 ml-4 mt-4 p-2">
        <div>
            <h3>Reading time:{readingTime}</h3>
        </div>
        <h1 className="text-3xl p-6 text-center">Bookmark Blogs: {bookmarks.length}</h1>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
