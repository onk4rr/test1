import Container from "../layout/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at top, rgba(108,92,231,.18), transparent 45%), var(--bg-body)",
      }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
            gap: "4rem",
            padding: "5rem 0",
          }}
        >
          {/* Left Content */}
          <div className="animate-slide-up">
            <span
              style={{
                display: "inline-block",
                color: "var(--color-primary)",
                fontWeight: "600",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Gaming Portfolio
            </span>

            <h1
              style={{
                fontSize: "clamp(3rem,6vw,5rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Showcasing My
              <br />
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Gaming Journey
              </span>
            </h1>

            <p
              style={{
                maxWidth: "620px",
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                marginBottom: "2rem",
              }}
            >
              Discover the games I've played, browse my gaming library,
              and watch my latest gameplay videos—all in one place.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              <Button>View Games</Button>
              <Button variant="outline">Latest Videos</Button>
            </div>

            <div
              style={{
                display: "flex",
                gap: "3rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h2 style={{ marginBottom: ".3rem" }}>120+</h2>
                <p>Games Played</p>
              </div>

              <div>
                <h2 style={{ marginBottom: ".3rem" }}>250+</h2>
                <p>Videos Uploaded</p>
              </div>

              <div>
                <h2 style={{ marginBottom: ".3rem" }}>5K+</h2>
                <p>Hours Played</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="animate-float"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "380px",
                height: "480px",
                borderRadius: "32px",
                background: "var(--gradient-card)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-glow)",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/profile/profile.png"
                alt="Gaming Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `
                    <div style="
                      color:white;
                      text-align:center;
                      font-size:4rem;
                    ">
                      🎮
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;