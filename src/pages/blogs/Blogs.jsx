import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublishedBlogs } from "../../redux/actions/blogsAction";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils/getImageUrl";

const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const { publishedBlogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getPublishedBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBlogs(publishedBlogs);
    } else {
      const lower = searchTerm.toLowerCase();
      setFilteredBlogs(
        publishedBlogs.filter(
          (b) =>
            b.title.toLowerCase().includes(lower) ||
            b.subTitle.toLowerCase().includes(lower)
        )
      );
    }
  }, [searchTerm, publishedBlogs]);

  return (
    <div className="container mx-auto mt-20 px-6 sm:px-10 md:px-14 lg:px-20 py-10">
      {/* HEADER */}
      <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl sm:text-6xl font-semibold text-green-500">
          Blogs
        </h1>

        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* CONTENT */}
      {loading ? (
        <p className="text-center text-gray-600">Loading blogs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              onClick={() => navigate(`/blog/${blog._id}`)}
              className="
                bg-white 
                rounded-xl 
                shadow-md 
                overflow-hidden 
                cursor-pointer 
                transition 
                duration-300 
                hover:shadow-xl 
                hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={getImageUrl(blog.image?.url) || "/img/blog.jfif"}
                  alt={blog.title}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.subTitle}
                </p>
              </div>
            </div>
          ))}

          {filteredBlogs.length === 0 && (
            <p className="text-center col-span-full text-gray-500">
              No blogs found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
