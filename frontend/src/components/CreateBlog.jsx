import { useState } from "react";
import axios from "axios";
import "./CreateBlog.css"; // External CSS for styling
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  
    const [formData, setformData] = useState({
        title:"",subtitle:"",description:"",author:""
    })
    
    const {title,subtitle,description,author}=formData
    const navigate=useNavigate()

    const handleChange=(e)=>{
    setformData({
        ...formData,
        [e.target.name]:[e.target.value]
    })

    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formdata=new FormData(e.currentTarget)
        const data=Object.fromEntries(formdata)
        const response=await axios.post("http://localhost:2000/create",data)
         console.log(response.data,"Blog created");
         navigate("/")
         alert("Blog created Successfully.")
            
  }

  return (
    <div className="create-blog-container">
      <h2>Create New Blog</h2>
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
        <button type="submit" className="submit-btn">Publish Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
