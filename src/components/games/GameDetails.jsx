import Button from "../common/Button";

function GameDetails({ game, onClose }) {
  if (!game) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.75)",
        backdropFilter: "var(--blur-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        zIndex: "var(--z-modal)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        {/* Cover */}
        <div
          style={{
            height: "320px",
            overflow: "hidden",
          }}
        >
          <img
            src={game.image}
            alt={game.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/1200x600/171b24/FFFFFF?text=Game";
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            padding: "2rem",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          <div>
            <h2>{game.title}</h2>

            <p
              style={{
                marginTop: ".75rem",
                color: "var(--text-secondary)",
              }}
            >
              {game.description ||
                "No description available for this game."}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "1rem",
            }}
          >
            <Info label="Genre" value={game.genre} />
            <Info label="Platform" value={game.platform} />
            <Info label="Hours Played" value={game.hoursPlayed} />
            <Info
              label="Status"
              value={game.completed ? "Completed" : "Playing"}
            />
            <Info label="Rating" value={`⭐ ${game.rating}/10`} />
            <Info
              label="Release Year"
              value={game.releaseYear || "-"}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div
      style={{
        padding: "1rem",
        background: "var(--bg-surface)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-color)",
      }}
    >
      <small
        style={{
          color: "var(--text-muted)",
          display: "block",
          marginBottom: ".4rem",
        }}
      >
        {label}
      </small>

      <strong>{value}</strong>
    </div>
  );
}

export default GameDetails;