/**
 * Truncate long text
 */
export function truncateText(text = "", maxLength = 100) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Format numbers (1000 -> 1K)
 */
export function formatNumber(value) {
  const number = Number(value);

  if (Number.isNaN(number)) return value;

  if (number >= 1_000_000_000) {
    return `${(number / 1_000_000_000).toFixed(1)}B`;
  }

  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`;
  }

  if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}K`;
  }

  return number.toString();
}

/**
 * Format playtime
 */
export function formatHours(hours) {
  const value = Number(hours);

  if (Number.isNaN(value)) return hours;

  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K hrs`;
  }

  return `${value} hrs`;
}

/**
 * Generate slug from title
 */
export function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Capitalize first letter
 */
export function capitalize(text = "") {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Filter games
 */
export function filterGames(games, search, genre, platform) {
  return games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || game.genre === genre;

    const matchesPlatform =
      platform === "All" || game.platform === platform;

    return matchesSearch && matchesGenre && matchesPlatform;
  });
}

/**
 * Sort by rating
 */
export function sortByRating(games) {
  return [...games].sort((a, b) => b.rating - a.rating);
}

/**
 * Sort by hours played
 */
export function sortByHours(games) {
  return [...games].sort(
    (a, b) =>
      parseFloat(b.hoursPlayed) - parseFloat(a.hoursPlayed)
  );
}

/**
 * Get featured video
 */
export function getFeaturedVideo(videos) {
  return videos.length ? videos[0] : null;
}