import { useMemo } from "react";

function GameFilter({
  search,
  setSearch,
  genre,
  setGenre,
  platform,
  setPlatform,
  games = [],
}) {
  const genres = useMemo(
    () => ["All", ...new Set(games.map((game) => game.genre))],
    [games]
  );

  const platforms = useMemo(
    () => ["All", ...new Set(games.map((game) => game.platform))],
    [games]
  );

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1rem",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--border-color)",
    background: "var(--bg-card)",
    color: "var(--text-primary)",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={inputStyle}
      >
        {genres.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={inputStyle}
      >
        {platforms.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GameFilter;