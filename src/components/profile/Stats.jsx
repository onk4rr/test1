function Stats({ stats = [] }) {
  if (!stats.length) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gap: "1rem",
        marginTop: "1.5rem",
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            padding: "1rem",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-lg)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              marginBottom: ".35rem",
              color: "var(--color-primary)",
              fontSize: "1.5rem",
              fontWeight: "var(--fw-bold)",
            }}
          >
            {stat.value}
          </h3>

          <p
            style={{
              margin: 0,
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stats;