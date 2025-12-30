import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createBlog, updateBlog } from "../../../redux/actions/blogsAction";
import { FaTimes } from "react-icons/fa";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function ModalOpenBlog({ open, onClose, blog, isEditing }) {
  const dispatch = useDispatch();
  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [status, setStatus] = useState("draft");
  const [contentHtml, setContentHtml] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  /* ================= LOAD EDIT DATA ================= */
  useEffect(() => {
    if (!blog || !isEditing) return;

    setTitle(blog.title || "");
    setSubTitle(blog.subTitle || "");
    setStatus(blog.status || "draft");
    setContentHtml(blog.contentHtml || "");
    setPreview(blog.image?.url || null);
    setFile(null);
  }, [blog, isEditing]);

  /* ================= IMAGE PICK ================= */
  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !contentHtml || contentHtml === "<p><br></p>") {
      setError("Title and content are required");
      return;
    }

    const fd = new FormData();
    fd.append("title", title);
    fd.append("subTitle", subTitle);
    fd.append("status", status);
    fd.append("contentHtml", contentHtml);
    if (file) fd.append("image", file);

    if (isEditing) {
      dispatch(updateBlog(blog._id, fd)).then(onClose);
    } else {
      dispatch(createBlog(fd)).then(onClose);
    }
  };

  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center  p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-lg shadow relative flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600"
        >
          <FaTimes />
        </button>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 overflow-y-auto"
          style={{ maxHeight: "80vh" }}
        >
          {" "}
          <h2 className="text-xl font-bold">
            {isEditing ? "Edit Blog" : "Create Blog"}
          </h2>
          <input
            className="border p-2 rounded w-full"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Subtitle"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          {/* ================= CONTENT ================= */}
          <label className="font-medium text-sm">Content</label>
          <div className="border rounded">
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={contentHtml}
              onChange={setContentHtml}
              modules={quillModules}
            />
          </div>
          {/* ================= IMAGE ================= */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {preview && (
            <img
              src={preview}
              className="w-32 h-32 object-cover rounded border"
            />
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded"
            >
              {isEditing ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalOpenBlog;
