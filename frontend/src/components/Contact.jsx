import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.subtext}>Have questions or feedback? We'd love to hear from you.</p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={handleChange}
          required
          rows={5}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "4rem auto",
    padding: "2rem",
    backgroundColor: "#fdfdfd",
    borderRadius: "10px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: "center"
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "#2c3e50"
  },
  subtext: {
    fontSize: "1rem",
    marginBottom: "2rem",
    color: "#555"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  input: {
    padding: "0.9rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none"
  },
  textarea: {
    padding: "1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    resize: "vertical",
    outline: "none"
  },
  button: {
    padding: "0.9rem",
    backgroundColor: "#457b9d",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "500",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  }
};

export default Contact;
