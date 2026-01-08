import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../redux/actions/blogsAction";
import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../utils/getImageUrl";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch, id]);

  if (loading) return <p className="text-center mt-10">Loading blog...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="mt-24 px-5 py-10 sm:px-10 md:px-20 lg:px-40">
      {/* BLOG IMAGE */}
      {blog?.image?.url && (
        <div className="w-full flex justify-center mb-8">
          <img
            src={getImageUrl(blog.image.url)}
            alt={blog.title}
            className="w-full max-h-[500px] object-contain rounded-lg"
          />
        </div>
      )}

      {/* TITLE */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-900">
          {blog.title}
        </h1>
        <p className="text-gray-700 font-semibold text-xl mt-2">
          {blog.subTitle}
        </p>
      </header>

      {/* CONTENT */}
      <div className="overflow-x-hidden">
        <article
          className="
            prose 
            prose-green 
            max-w-none
            prose-img:max-w-full
            prose-img:h-auto
            prose-img:rounded-lg
            prose-img:mx-auto
            prose-p:leading-relaxed
            prose-li:leading-relaxed
          "
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
      </div>
    </div>
  );
};

export default SingleBlog;
