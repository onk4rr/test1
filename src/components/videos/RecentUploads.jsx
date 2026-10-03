import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import VideoPlayer from "./VideoPlayer";
import VideoCard from "./VideoCard";

import videos from "../../data/videos";

function RecentUploads() {
  const featuredVideo = videos[0];

  return (
    <section id="videos" className="section">
      <Container>
        <SectionTitle
          subtitle="Latest Content"
          title="Recent Video Uploads"
          align="center"
        />

        {/* Featured Video */}
        {featuredVideo && (
          <div
            style={{
              marginBottom: "3rem",
            }}
          >
            <VideoPlayer
              title={featuredVideo.title}
              embedUrl={featuredVideo.embedUrl}
              thumbnail={featuredVideo.thumbnail}
            />
          </div>
        )}

        {/* Video Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {videos.slice(1).map((video) => (
            <VideoCard
              key={video.id}
              {...video}
            />
          ))}
        </div>

        {videos.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 0",
              color: "var(--text-secondary)",
            }}
          >
            <h3>No videos uploaded yet.</h3>
            <p>Check back soon for new gameplay videos.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default RecentUploads;