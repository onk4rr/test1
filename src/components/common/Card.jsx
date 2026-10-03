function Card({
  children,
  className = "",
  padding = "1.5rem",
  hover = true,
  onClick,
  ...props
}) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        background: "var(--gradient-card)",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-xl)",
        padding,
        transition: "all var(--transition-normal)",
        boxShadow: "var(--shadow-md)",
        cursor: onClick ? "pointer" : "default",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (!hover) return;

        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.backgroundColor = "var(--bg-card-hover)";
        e.currentTarget.style.borderColor = "var(--color-primary)";
        e.currentTarget.style.boxShadow = "var(--shadow-glow)";
      }}
      onMouseLeave={(e) => {
        if (!hover) return;

        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.backgroundColor = "var(--bg-card)";
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;