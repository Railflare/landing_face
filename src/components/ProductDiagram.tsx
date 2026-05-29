import { Bot, CreditCard, Check, CirclePause, Ban, ArrowRight } from "lucide-react";

const AGENTS = ["agent-7f2c", "agent-claude-buy", "agent-research", "agent-shop-bot"];
const RAILS  = ["stripe", "visa", "ach", "x402"];

function Arrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, opacity: 0.5 }}>
      <div style={{ height: 1, width: 22, background: "var(--flare-500)" }} />
      <ArrowRight size={14} color="var(--flare-500)" strokeWidth={2} />
      <div style={{ height: 1, width: 22, background: "var(--flare-500)" }} />
    </div>
  );
}

function Mini({ icon: Icon, color }: { icon: React.ElementType; color: string }) {
  return (
    <div style={{
      width: 26, height: 26, borderRadius: 6,
      background: "rgba(244,238,229,0.06)",
      display: "grid", placeItems: "center",
    }}>
      <Icon size={14} color={color} strokeWidth={1.75} />
    </div>
  );
}

export default function ProductDiagram() {
  return (
    <section style={{ padding: "32px 24px 96px" }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto",
        background: "#FFFDF8", borderRadius: 24, padding: "56px 48px",
        border: "1px solid rgba(27,23,20,0.06)", boxShadow: "var(--shadow-2)",
      }}>
        <div style={{
          font: "600 12px/1 var(--font-sans)",
          letterSpacing: "0.10em", textTransform: "uppercase",
          color: "var(--flare-600)", marginBottom: 12, textAlign: "center",
        }}>
          the network
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--ink-900)",
          margin: "0 auto 48px", textAlign: "center", maxWidth: 720,
        }}>
          sits between your <span className="t-fill">agents</span> and their rails.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 24, alignItems: "center" }}>
          {/* Agents */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{
              font: "600 11px/1 var(--font-sans)", letterSpacing: "0.10em",
              textTransform: "uppercase", color: "var(--ink-400)", marginBottom: 6,
            }}>
              agents
            </div>
            {AGENTS.map((a) => (
              <div key={a} style={{
                background: "var(--paper-100)", padding: "10px 14px",
                borderRadius: 10, border: "1px solid rgba(27,23,20,0.08)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <Bot size={14} color="var(--ink-400)" strokeWidth={1.75} />
                <span style={{ font: "500 13px/1 var(--font-mono)", color: "var(--ink-900)" }}>{a}</span>
              </div>
            ))}
          </div>

          {/* Railflare node */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <Arrow />
            <div style={{
              background: "var(--ink-950)", color: "#F4EEE5",
              padding: "28px 32px", borderRadius: 18,
              border: "1px solid rgba(240,122,31,0.4)",
              boxShadow: "0 24px 64px -16px rgba(240,122,31,0.4), 0 8px 24px -8px rgba(27,23,20,0.18)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              minWidth: 200,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo-lockup.png"
                style={{ height: 32, width: "auto", filter: "brightness(0) invert(1)" }}
                alt="railflare"
              />
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "3px 10px 3px 8px", borderRadius: 999,
                background: "rgba(46,143,95,0.18)", color: "#6AC890",
                font: "600 11px/1.4 var(--font-sans)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6AC890", display: "inline-block" }} />
                watching
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                <Mini icon={Check}        color="#6AC890" />
                <Mini icon={CirclePause}  color="#E8B447" />
                <Mini icon={Ban}          color="#EC7458" />
              </div>
            </div>
            <Arrow />
          </div>

          {/* Rails */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{
              font: "600 11px/1 var(--font-sans)", letterSpacing: "0.10em",
              textTransform: "uppercase", color: "var(--ink-400)", marginBottom: 6,
            }}>
              rails
            </div>
            {RAILS.map((r) => (
              <div key={r} style={{
                background: "var(--paper-100)", padding: "10px 14px",
                borderRadius: 10, border: "1px solid rgba(27,23,20,0.08)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <CreditCard size={14} color="var(--ink-400)" strokeWidth={1.75} />
                <span style={{ font: "500 13px/1 var(--font-mono)", color: "var(--ink-900)" }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
