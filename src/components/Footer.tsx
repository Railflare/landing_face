import { Code2, X, Briefcase } from "lucide-react";

const COLS = [
  { heading: "product",     links: ["traffic", "policies", "rails", "agents", "sdk"] },
  { heading: "company",     links: ["about", "careers", "blog", "press"] },
  { heading: "developers",  links: ["docs", "changelog", "status", "github"] },
  { heading: "legal",       links: ["security", "privacy", "terms", "dpa"] },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--paper-200)",
      borderTop: "1px solid rgba(27,23,20,0.08)",
      padding: "64px 24px 32px",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(4, 1fr)",
          gap: 32,
          marginBottom: 56,
        }}>
          {/* brand col */}
          <div>
            <div style={{ marginBottom: 16, display: "flex", alignItems: "flex-start" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-lockup.png" style={{ height: 36, width: "auto" }} alt="railflare" />
            </div>
            <p style={{
              font: "400 14px/1.55 var(--font-sans)",
              color: "var(--ink-400)",
              maxWidth: 280,
              margin: 0,
            }}>
              agent payments, watched. the control plane for autonomous transactions.
            </p>
          </div>

          {/* link cols */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <div style={{
                font: "600 11px/1 var(--font-sans)",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "var(--ink-400)",
                marginBottom: 14,
              }}>
                {col.heading}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ font: "500 14px/1 var(--font-sans)", color: "var(--ink-900)", textDecoration: "none" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 24, borderTop: "1px solid rgba(27,23,20,0.08)",
        }}>
          <span style={{ font: "500 12px/1 var(--font-mono)", color: "var(--ink-400)" }}>
            © 2026 railflare, inc. · soc 2 type ii
          </span>
          <div style={{ display: "flex", gap: 14, color: "var(--ink-400)" }}>
            <Code2 size={16} strokeWidth={1.75} />
            <X size={16} strokeWidth={1.75} />
            <Briefcase size={16} strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </footer>
  );
}
