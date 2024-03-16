import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleAddBs, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadData() {
      const fetchData = await fetch("blog.json");
      const data = await fetchData.json();
      setBlogs(data);
    }
    loadData();
  }, []);
  return (
    <>
      <div className="md:w-2/3">
        <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleMarkAsRead={handleMarkAsRead}  handleAddBs={handleAddBs}></Blog>
        ))}
      </div>
    </>
  );
};
Blogs.propTypes ={
  handleAddBs: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
}
export default Blogs;
