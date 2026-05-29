import GlobeWrapper from "./GlobeWrapper";

const VALUES = [
  {
    label: "Instant Observability",
    body: "Watch all payment activity done by your business agent workflow.",
  },
  {
    label: "Control Abstraction",
    body: "Control and ownership established for your business — you're in control of your money.",
  },
  {
    label: "Business > Tech",
    body: "Focus on what matters for business, delegate the tech heavy-lifting to railflare.",
  },
  {
    label: "Protocol Agnostic",
    body: "Most optimal protocol and rail are configured with respect to your business needs.",
  },
];

export default function WhyUs() {
  return (
    <section
      style={{
        background: "var(--paper-200)",
        padding: "96px 48px 108px",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* ── Left: value statements ────────────────────────────────── */}
        <div>
          <div
            style={{
              font: "600 11px/1 var(--font-sans)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--flare-600)",
              marginBottom: 18,
            }}
          >
            why railflare
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.8vw, 50px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "var(--ink-900)",
              margin: "0 0 52px",
            }}
          >
            built for the{" "}
            <span style={{ color: "var(--flare-500)" }}>agentic internet</span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {VALUES.map(({ label, body }, i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  padding: "24px 0",
                  borderTop:
                    i === 0
                      ? "1px solid rgba(27,23,20,0.08)"
                      : "1px solid rgba(27,23,20,0.08)",
                  borderBottom:
                    i === VALUES.length - 1
                      ? "1px solid rgba(27,23,20,0.08)"
                      : "none",
                }}
              >
                <div
                  style={{
                    font: "600 14px/1 var(--font-sans)",
                    color: "var(--ink-900)",
                  }}
                >
                  {label}
                </div>
                <p
                  style={{
                    font: "400 15px/1.6 var(--font-sans)",
                    color: "var(--ink-400)",
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: globe ──────────────────────────────────────────── */}
        <div
          style={{
            height: 520,
            position: "relative",
          }}
        >
          <GlobeWrapper />
        </div>
      </div>
    </section>
  );
}
