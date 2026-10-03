import Hero from "../components/hero/Hero";
import GamesLibrary from "../components/games/GamesLibrary";
import RecentUploads from "../components/videos/RecentUploads";

function Home() {
  return (
    <>
      <Hero />
      <GamesLibrary />
      <RecentUploads />
    </>
  );
}

export default Home;