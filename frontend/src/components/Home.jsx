import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios'
const featuredPost = {
  title: "Welcome to My Blog!",
  summary: "Explore latest trends, tutorials, and stories on tech, lifestyle, and more.",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  link: "/blogs/featured-post",
};

const Home = () => {
    const [blog, setblog] = useState([])
    const fetchBLog=async()=>{
        const blogfetch=await axios.get("http://localhost:2000/")
        setblog(blogfetch.data.data)
        
    }

    useEffect(()=>{
        fetchBLog()
    },[])

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Your daily dose of tech insights, tutorials, and stories.</p>
        <a href={featuredPost.link} className="btn-primary">
          Read Featured Post
        </a>
      </section>

      <section className="featured-post">
        <img src={featuredPost.image} alt={featuredPost.title} />
        <div className="featured-content">
          <h2>{featuredPost.title}</h2>
          <p>{featuredPost.summary}</p>
          <a href={featuredPost.link} className="btn-secondary">
            Read More
          </a>
        </div>
      </section>

      <section className="latest-posts">
        <h3>Latest Posts</h3>
        <div className="posts-grid">
      
      {
  blog.map(post => (
    <div className="post-card" key={post._id}>
      <h2 className="post-title">{post.title}</h2>
      <h3 className="post-subtitle">{post.subtitle}</h3>
      <p className="post-description">{post.description}</p>
      <a href={`/read/${post._id}`} className="btn-readmore">Read More →</a>
    </div>
  ))
}  
        </div>
      </section>
    </div>
  );
};

export default Home;
