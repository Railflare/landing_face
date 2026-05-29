import { Activity, ShieldCheck, GitMerge, Terminal } from "lucide-react";

const FEATURES = [
  {
    Icon: Activity,
    title: "watch",
    body: "every transaction, indexed and queryable in under 80 ms. no batch jobs, no daily exports.",
  },
  {
    Icon: ShieldCheck,
    title: "police",
    body: "allow, block, or hold any payment with one rule. policies fire at the rail, not after the fact.",
  },
  {
    Icon: GitMerge,
    title: "route",
    body: "fail open to a backup rail. fail closed on a sanctioned merchant. you decide, per agent.",
  },
  {
    Icon: Terminal,
    title: "replay",
    body: "scrub the last 24 hours. step into a transaction. understand why your agent did what it did.",
  },
];

export default function Features() {
  return (
    <section style={{ padding: "96px 24px", borderTop: "1px solid rgba(27,23,20,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{
          font: "600 12px/1 var(--font-sans)",
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "var(--flare-600)",
          marginBottom: 14,
        }}>
          what railflare does
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "var(--ink-900)",
          margin: "0 0 56px",
          maxWidth: 800,
        }}>
          one screen.{" "}
          <span className="t-fill">four moves.</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 32,
        }}>
          {FEATURES.map(({ Icon, title, body }) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(240,122,31,0.10)",
                color: "var(--flare-600)",
                display: "grid", placeItems: "center",
                flexShrink: 0,
              }}>
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "var(--ink-900)",
                letterSpacing: "-0.01em",
              }}>
                {title}
              </div>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.55,
                color: "var(--ink-700)",
              }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
