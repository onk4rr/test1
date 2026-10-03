function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  const variants = {
    primary: {
      background: "var(--gradient-primary)",
      color: "#ffffff",
      border: "none",
    },

    secondary: {
      background: "var(--bg-card)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-color)",
    },

    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--color-primary)",
    },

    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "none",
    },
  };

  const sizes = {
    sm: {
      padding: "0.6rem 1rem",
      fontSize: "0.875rem",
    },

    md: {
      padding: "0.85rem 1.5rem",
      fontSize: "1rem",
    },

    lg: {
      padding: "1rem 2rem",
      fontSize: "1.1rem",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        ...variants[variant],
        ...sizes[size],

        width: fullWidth ? "100%" : "auto",

        borderRadius: "var(--radius-lg)",
        fontWeight: "var(--fw-semibold)",
        cursor: disabled ? "not-allowed" : "pointer",

        opacity: disabled ? 0.6 : 1,

        transition: "all var(--transition-normal)",

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",

        boxShadow:
          variant === "primary"
            ? "var(--shadow-glow)"
            : "none",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;