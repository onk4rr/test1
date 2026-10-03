import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Games", href: "#games" },
  { name: "Videos", href: "#videos" },
  { name: "About", href: "#about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
        background: "rgba(11,13,18,0.85)",
        backdropFilter: "var(--blur-md)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <Container>
        <nav
          style={{
            height: "var(--navbar-height)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "var(--text-primary)",
            }}
          >
            🎮 GamePortal
          </a>

          {/* Desktop Navigation */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "1.5rem",
              color: "var(--text-primary)",
            }}
            className="mobile-toggle"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingBottom: "1.5rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;