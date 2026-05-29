export default function Home() {
  return (
    <main className="bg-paper" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
    }}>
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logo-lockup.png"
        alt="railflare"
        style={{ height: 40, width: "auto", marginBottom: 48 }}
      />

      {/* Eyebrow */}
      <div style={{
        font: "600 11px/1 var(--font-sans)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--flare-600)",
        marginBottom: 20,
      }}>
        coming soon
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(32px, 5vw, 52px)",
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: "-0.025em",
        color: "var(--ink-900)",
        textAlign: "center",
        margin: 0,
        maxWidth: 560,
      }}>
        agent payments,{" "}
        <span className="t-underline">watched</span>.
      </h1>

      {/* Subheading */}
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.65,
        color: "var(--ink-400)",
        textAlign: "center",
        margin: "22px 0 0",
        maxWidth: 420,
      }}>
        Cloudflare for the agentic economy — giving control back to businesses
        without compromising agent autonomy over payments.
      </p>

      {/* Divider */}
      <div style={{
        width: 32,
        height: 1,
        background: "rgba(27,23,20,0.10)",
        margin: "40px 0",
      }} />

      {/* X link */}
      <a
        href="https://x.com/railflare"
        target="_blank"
        rel="noopener noreferrer"
        className="x-link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          font: "500 13px/1 var(--font-sans)",
          textDecoration: "none",
          padding: "8px 14px",
          borderRadius: 999,
          border: "1px solid",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="13"
          height="13"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        @railflare
      </a>
    </main>
  );
}
