import Card from "../common/Card";
import Button from "../common/Button";

function VideoCard({
  title,
  thumbnail,
  game,
  duration,
  uploadDate,
  views,
  url,
}) {
  return (
    <Card padding="0">
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          overflow: "hidden",
          background: "var(--bg-surface)",
        }}
      >
        <img
          src={thumbnail}
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
              "https://placehold.co/800x450/171b24/FFFFFF?text=Video";
          }}
        />

        <span
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "rgba(0,0,0,.8)",
            color: "#fff",
            padding: ".35rem .6rem",
            borderRadius: "6px",
            fontSize: ".8rem",
            fontWeight: 600,
          }}
        >
          {duration}
        </span>
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
              lineHeight: 1.4,
            }}
          >
            {title}
          </h3>

          <p>{game}</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "var(--text-muted)",
            fontSize: ".9rem",
          }}
        >
          <span>{uploadDate}</span>
          <span>{views} views</span>
        </div>

        <Button
          fullWidth
          onClick={() => window.open(url, "_blank")}
        >
          Watch Video
        </Button>
      </div>
    </Card>
  );
}

export default VideoCard;