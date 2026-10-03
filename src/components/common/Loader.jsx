function Loader({
  size = 56,
  text = "Loading...",
  fullScreen = false,
}) {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    width: "100%",
    padding: "2rem",
  };

  if (fullScreen) {
    wrapperStyle.minHeight = "100vh";
  }

  return (
    <div style={wrapperStyle}>
      <div
        className="animate-spin"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          border: "4px solid rgba(255,255,255,0.12)",
          borderTop: "4px solid var(--color-primary)",
          borderRight: "4px solid var(--color-secondary)",
        }}
      />

      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "var(--fs-sm)",
          letterSpacing: "0.04em",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Loader;