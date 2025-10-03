import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleBlog.css"; 

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  const fetchSingleBlog = async () => {
    try {
      const response = await axios.get("http://localhost:2000/read/" + id);
      setBlog(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setLoading(false);
    }
  };

  const handleDelete=async()=>{
    const response=await axios.delete("http://localhost:2000/delete/"+id)
    if(response.status===200){
      alert("Delete successfully")
      navigate("/")
    }
  }


  useEffect(() => {
    fetchSingleBlog();
  }, [id]);

  if (loading) {
    return <div className="single-blog-loading">Loading blog...</div>;
  }

  return (
    <div className="single-blog-container">
      <h1 className="single-blog-title">{blog.title}</h1>
      <h3 className="single-blog-subtitle">{blog.subtitle}</h3>
      <p className="single-blog-meta">By {blog.author || "Unknown Author"}</p>
      <div className="single-blog-description">{blog.description}</div>
      
      <div className="single-blog-actions">
        <button className="edit-btn" onClick={handleUpdate}>
          ✏️ Edit
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          🗑️ Delete
        </button>
</div>

    </div>
  );
};

export default SingleBlog;
