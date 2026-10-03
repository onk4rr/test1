import { useMemo, useState } from "react";

import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import GameCard from "./GameCard";
import GameFilter from "./GameFilter";

import games from "../../data/games";

function GamesLibrary() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [platform, setPlatform] = useState("All");

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre =
        genre === "All" || game.genre === genre;

      const matchesPlatform =
        platform === "All" || game.platform === platform;

      return (
        matchesSearch &&
        matchesGenre &&
        matchesPlatform
      );
    });
  }, [search, genre, platform]);

  return (
    <section
      id="games"
      className="section"
    >
      <Container>
        <SectionTitle
          subtitle="Library"
          title="Games Played"
          align="center"
        />

        <GameFilter
          search={search}
          setSearch={setSearch}
          genre={genre}
          setGenre={setGenre}
          platform={platform}
          setPlatform={setPlatform}
          games={games}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              {...game}
            />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 0",
              color: "var(--text-secondary)",
            }}
          >
            <h3>No games found</h3>
            <p>Try changing your search or filters.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default GamesLibrary;