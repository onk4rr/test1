import Container from "./Container";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-color)",
        marginTop: "4rem",
        padding: "2rem 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: ".5rem",
              }}
            >
              🎮 GamePortal
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: ".95rem",
              }}
            >
              Showcasing games played, achievements, and recent gaming content.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
            }}
          >
            <a href="#home">Home</a>
            <a href="#games">Games</a>
            <a href="#videos">Videos</a>
            <a href="#about">About</a>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border-color)",
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: ".9rem",
          }}
        >
          © {year} GamePortal. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;