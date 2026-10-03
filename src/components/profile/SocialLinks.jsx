function SocialLinks({ links = [] }) {
  if (!links.length) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-primary)",
            fontSize: "1.2rem",
            transition: "all var(--transition-normal)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-primary)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "var(--shadow-glow)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-surface)";
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;