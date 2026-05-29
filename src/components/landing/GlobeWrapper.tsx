"use client";

import dynamic from "next/dynamic";

const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), { ssr: false });

export default function GlobeWrapper() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <GlobeCanvas />
    </div>
  );
}
