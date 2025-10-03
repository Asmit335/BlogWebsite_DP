
const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About This Blog</h1>
      <p style={styles.paragraph}>
        Welcome to <strong>My Blog</strong> – a place where thoughts, ideas, and tutorials come to life.
        Whether you're into tech, coding, lifestyle, or just curious reads, you’ll find something valuable here.
      </p>
      <p style={styles.paragraph}>
        This blog is maintained by passionate developers and writers aiming to share insights and spark
        meaningful discussions. We believe in learning, growing, and helping others do the same.
      </p>
      <p style={styles.paragraph}>
        Thank you for stopping by. Stay tuned for more articles!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "4rem auto",
    padding: "2rem",
    backgroundColor: "#fefefe",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  paragraph: {
    fontSize: "1.1rem",
    marginBottom: "1.2rem",
    textAlign: "justify",
  },
};

export default About;
