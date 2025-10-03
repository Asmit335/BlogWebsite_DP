import { useState, useEffect } from "react";
import "./UpdateBlog.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    author: "",
  });

  const { title, subtitle, description, author } = formData;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/read/${id}`);
        if (response.data.data) {
          setFormData({
            title: response.data.data.title || "",
            subtitle: response.data.data.subtitle || "",
            description: response.data.data.description || "",
            author: response.data.data.author || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:2000/update/${id}`, formData);
      alert("Blog Updated Successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog.");
    }
  };

  return (
    <div className="create-blog-container">
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit} className="create-blog-form">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          value={subtitle}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Blog Description"
          value={description}
          onChange={handleChange}
          required
          rows={6}
        />
        <input
          type="text"
          name="author"
          placeholder="Author (optional)"
          value={author}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
