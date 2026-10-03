import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import GamesLibrary from "./components/games/GamesLibrary";
import RecentUploads from "./components/videos/RecentUploads";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <GamesLibrary />
        <RecentUploads />
      </main>

      <Footer />
    </>
  );
}

export default App;