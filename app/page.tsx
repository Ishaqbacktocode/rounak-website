// app/page.js
export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Welcome to My Homepage</h1>
      <p style={styles.subtitle}>
        This is a simple Next.js homepage example.
      </p>
    </main>
  );
}

// Inline styles for simplicity
const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
};
