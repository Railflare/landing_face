import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Railflare — agent payments, watched.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = readFileSync(
    join(process.cwd(), "public/assets/logo-lockup.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  const markData = readFileSync(
    join(process.cwd(), "public/assets/logo-mark.png")
  );
  const markSrc = `data:image/png;base64,${markData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF7F2",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle grain overlay approximation — orange accent dot */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#F6821F",
            display: "flex",
          }}
        />

        {/* faint watermark mark — bottom right */}
        <img
          src={markSrc}
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 320,
            height: 320,
            opacity: 0.045,
          }}
        />

        {/* logo */}
        <img
          src={logoSrc}
          style={{
            height: 48,
            width: "auto",
            marginBottom: 48,
          }}
        />

        {/* headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#1B1714",
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
            textAlign: "center",
            maxWidth: 860,
            display: "flex",
          }}
        >
          agent payments, watched.
        </div>

        {/* subline */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "#5E544C",
            marginTop: 22,
            maxWidth: 680,
            textAlign: "center",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Cloudflare for the agentic economy — giving control back to businesses.
        </div>

        {/* domain badge */}
        <div
          style={{
            marginTop: 44,
            padding: "8px 18px",
            borderRadius: 999,
            border: "1px solid rgba(27,23,20,0.14)",
            fontSize: 14,
            fontWeight: 600,
            color: "#5E544C",
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          railflare.com
        </div>
      </div>
    ),
    { ...size }
  );
}
