import Stats from "./Stats";
import SocialLinks from "./SocialLinks";
import Button from "../common/Button";
import Card from "../common/Card";

function ProfileCard({ profile }) {
  if (!profile) return null;

  return (
    <Card padding="0">
      {/* Cover */}
      <div
        style={{
          height: "180px",
          background:
            "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
        }}
      />

      {/* Avatar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-60px",
        }}
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid var(--bg-card)",
            background: "var(--bg-surface)",
          }}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/120x120/171b24/FFFFFF?text=👤";
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: ".5rem",
          }}
        >
          {profile.name}
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
          }}
        >
          {profile.bio}
        </p>

        <Stats stats={profile.stats} />

        <div
          style={{
            margin: "2rem 0",
          }}
        >
          <SocialLinks links={profile.socials} />
        </div>

        <Button
          fullWidth
          onClick={() => window.open(profile.channel, "_blank")}
        >
          Visit Channel
        </Button>
      </div>
    </Card>
  );
}

export default ProfileCard;