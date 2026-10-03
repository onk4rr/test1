function SectionTitle({
  title,
  subtitle = "",
  align = "left",
  className = "",
}) {
  return (
    <div
      className={className}
      style={{
        textAlign: align,
        marginBottom: "3rem",
      }}
    >
      <span
        style={{
          display: "inline-block",
          color: "var(--color-primary)",
          fontSize: "var(--fs-sm)",
          fontWeight: "var(--fw-semibold)",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "0.75rem",
        }}
      >
        {subtitle}
      </span>

      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "var(--fw-bold)",
          color: "var(--text-primary)",
          marginBottom: subtitle ? "1rem" : 0,
        }}
      >
        {title}
      </h2>

      <div
        style={{
          width: "72px",
          height: "4px",
          margin:
            align === "center"
              ? "0 auto"
              : align === "right"
              ? "0 0 0 auto"
              : "0",
          borderRadius: "999px",
          background: "var(--gradient-primary)",
        }}
      />
    </div>
  );
}

export default SectionTitle;