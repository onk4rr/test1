import Card from "../common/Card";
import Button from "../common/Button";

function GameCard({
  title,
  image,
  genre,
  platform,
  hoursPlayed,
  completed,
  rating,
}) {
  return (
    <Card padding="0" className="game-card">
      {/* Game Cover */}
      <div
        style={{
          width: "100%",
          height: "220px",
          overflow: "hidden",
          background: "var(--bg-surface)",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform var(--transition-normal)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/171b24/FFFFFF?text=Game+Cover";
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div>
          <h3
            style={{
              marginBottom: ".5rem",
            }}
          >
            {title}
          </h3>

          <p>{genre}</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: ".75rem",
          }}
        >
          <div>
            <small
              style={{
                color: "var(--text-muted)",
              }}
            >
              Platform
            </small>

            <p>{platform}</p>
          </div>

          <div>
            <small
              style={{
                color: "var(--text-muted)",
              }}
            >
              Hours
            </small>

            <p>{hoursPlayed}</p>
          </div>

          <div>
            <small
              style={{
                color: "var(--text-muted)",
              }}
            >
              Rating
            </small>

            <p>⭐ {rating}/10</p>
          </div>

          <div>
            <small
              style={{
                color: "var(--text-muted)",
              }}
            >
              Status
            </small>

            <p
              style={{
                color: completed
                  ? "var(--color-success)"
                  : "var(--color-warning)",
              }}
            >
              {completed ? "Completed" : "Playing"}
            </p>
          </div>
        </div>

        <Button fullWidth>
          View Details
        </Button>
      </div>
    </Card>
  );
}

export default GameCard;