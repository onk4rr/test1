function VideoPlayer({
  title,
  embedUrl,
  thumbnail,
  autoplay = false,
}) {
  // Converts normal YouTube URLs to embed URLs if needed
  const getEmbedUrl = () => {
    if (!embedUrl) return "";

    if (embedUrl.includes("embed")) {
      return `${embedUrl}${autoplay ? "?autoplay=1" : ""}`;
    }

    const videoId = embedUrl.includes("watch?v=")
      ? embedUrl.split("watch?v=")[1].split("&")[0]
      : embedUrl.split("/").pop();

    return `https://www.youtube.com/embed/${videoId}${
      autoplay ? "?autoplay=1" : ""
    }`;
  };

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      {embedUrl ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          <iframe
            src={getEmbedUrl()}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            aspectRatio: "16 / 9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-surface)",
          }}
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <h2 style={{ fontSize: "4rem" }}>🎬</h2>
          )}
        </div>
      )}

      <div
        style={{
          padding: "1.25rem 1.5rem",
        }}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default VideoPlayer;