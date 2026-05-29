export default function Header() {
  const navLinks = ["product", "rails", "policies", "pricing", "docs"];

  return (
    <header style={{ position: "sticky", top: 16, zIndex: 10, padding: "16px 16px 0" }}>
      <div style={{
        maxWidth: 1180,
        margin: "0 auto",
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(27,23,20,0.06)",
        boxShadow: "0 6px 22px -8px rgba(27,23,20,0.10), 0 2px 6px -2px rgba(27,23,20,0.04)",
        borderRadius: 999,
        padding: "10px 14px 10px 22px",
        display: "flex",
        alignItems: "center",
        gap: 28,
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-lockup.png" style={{ height: 28, width: "auto", display: "block" }} alt="railflare" />
        </a>

        <nav style={{ display: "flex", gap: 22, flex: 1, marginLeft: 8 }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                font: "500 14px/1 var(--font-sans)",
                color: "var(--ink-700)",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        <a href="#" style={{ font: "500 14px/1 var(--font-sans)", color: "var(--ink-900)", textDecoration: "none", flexShrink: 0 }}>
          sign in
        </a>
        <button style={{
          background: "var(--flare-500)",
          color: "white",
          border: "none",
          borderRadius: 999,
          padding: "9px 18px",
          font: "600 14px/1 var(--font-sans)",
          cursor: "pointer",
          flexShrink: 0,
        }}>
          start watching
        </button>
      </div>
    </header>
  );
}
