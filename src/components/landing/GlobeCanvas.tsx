"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

const HOTSPOTS: Array<{
  coords: [number, number];
  label: string;
  amount: string;
  tags: string[];
}> = [
  {
    coords: [37.7, -122.4],
    label: "Ag1 paid phantom mk1",
    amount: "0.5 USDC",
    tags: ["stablecoin", "x402", "UCP", "Data acquisition"],
  },
  {
    coords: [51.5, -0.1],
    label: "Ag2 paid oracle srv",
    amount: "1.2 USDC",
    tags: ["stablecoin", "x501", "API", "Weather data"],
  },
  {
    coords: [1.3, 103.8],
    label: "Ag3 paid compute node",
    amount: "2.0 USDC",
    tags: ["stablecoin", "x203", "GPU", "ML inference"],
  },
  {
    coords: [35.7, 139.7],
    label: "Ag4 paid storage svc",
    amount: "0.8 USDC",
    tags: ["stablecoin", "x102", "S3", "File storage"],
  },
  {
    coords: [48.8, 2.35],
    label: "Ag5 paid analytics",
    amount: "1.5 USDC",
    tags: ["stablecoin", "x340", "REST", "Data pipeline"],
  },
];

const ARCS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [3, 2],
];

export default function GlobeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || 480;
    const h = el.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(0, 0, 3.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const globe = new THREE.Group();
    scene.add(globe);
    const R = 1;

    // ── Fibonacci dot sphere ──────────────────────────────────────────────
    const N = 1800;
    const dotPositions: number[] = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      dotPositions.push(
        R * Math.sin(phi) * Math.cos(theta),
        R * Math.cos(phi),
        R * Math.sin(phi) * Math.sin(theta),
      );
    }
    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(dotPositions, 3),
    );
    globe.add(
      new THREE.Points(
        dotsGeo,
        new THREE.PointsMaterial({
          color: 0xf6821f,
          size: 0.013,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.65,
        }),
      ),
    );

    // ── Latitude rings ────────────────────────────────────────────────────
    const addLine = (pts: THREE.Vector3[], opacity: number, color = 0xf6821f) => {
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      globe.add(new THREE.Line(geo, mat));
    };

    for (let lat = -60; lat <= 60; lat += 30) {
      const latR = (lat * Math.PI) / 180;
      const cr = R * Math.cos(latR);
      const y = R * Math.sin(latR);
      addLine(
        Array.from({ length: 65 }, (_, i) => {
          const a = (i / 64) * Math.PI * 2;
          return new THREE.Vector3(cr * Math.cos(a), y, cr * Math.sin(a));
        }),
        0.09,
      );
    }

    // ── Longitude lines ───────────────────────────────────────────────────
    for (let lon = 0; lon < 360; lon += 45) {
      const lonR = (lon * Math.PI) / 180;
      addLine(
        Array.from({ length: 65 }, (_, i) => {
          const la = (i / 64) * Math.PI - Math.PI / 2;
          return new THREE.Vector3(
            R * Math.cos(la) * Math.cos(lonR),
            R * Math.sin(la),
            R * Math.cos(la) * Math.sin(lonR),
          );
        }),
        0.05,
      );
    }

    // ── Hotspot nodes with cards ──────────────────────────────────────────
    const hotVecs = HOTSPOTS.map((spot) => latLonToVec3(spot.coords[0], spot.coords[1], R));

    // Create HTML overlay for cards
    const cardContainer = document.createElement("div");
    cardContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    `;
    el.appendChild(cardContainer);

    const cardElements: HTMLDivElement[] = [];

    hotVecs.forEach((pos, i) => {
      const spot = HOTSPOTS[i];

      // Create 3D node
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.022, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xffaa40 }),
      );
      dot.position.copy(pos);
      globe.add(dot);

      // halo ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.044, 0.003, 8, 32),
        new THREE.MeshBasicMaterial({ color: 0xffaa40, transparent: true, opacity: 0.4 }),
      );
      ring.position.copy(pos);
      ring.lookAt(0, 0, 0);
      globe.add(ring);

      // Only create cards for first 2 hotspots
      if (i < 2) {
        const isOrange = i === 0;

        // Create HTML card
        const card = document.createElement("div");
        card.style.cssText = `
          position: absolute;
          background: ${isOrange ? 'rgba(246, 130, 31, 0.95)' : 'rgba(255, 255, 255, 0.98)'};
          border: 1px solid ${isOrange ? 'rgba(246, 130, 31, 0.3)' : 'rgba(27, 23, 20, 0.1)'};
          border-radius: 8px;
          padding: 10px 14px;
          font-family: var(--font-sans, system-ui);
          font-size: 11px;
          color: ${isOrange ? '#ffffff' : '#1b1714'};
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
          transform: translate(-50%, -120%);
          transition: opacity 0.3s ease;
        `;

        // Card header
        const header = document.createElement("div");
        header.style.cssText = `
          font-weight: 600;
          margin-bottom: 6px;
          color: ${isOrange ? '#ffffff' : '#1b1714'};
        `;
        header.textContent = `${spot.label} | ${spot.amount}`;
        card.appendChild(header);

        // Tags container
        const tagsContainer = document.createElement("div");
        tagsContainer.style.cssText = `
          display: flex;
          gap: 6px;
        `;

        spot.tags.forEach((tag) => {
          const tagEl = document.createElement("span");
          tagEl.style.cssText = `
            padding: 3px 8px;
            background: ${isOrange ? 'rgba(255, 255, 255, 0.2)' : 'rgba(246, 130, 31, 0.08)'};
            border: 1px solid ${isOrange ? 'rgba(255, 255, 255, 0.3)' : 'rgba(246, 130, 31, 0.15)'};
            border-radius: 4px;
            font-size: 10px;
            font-weight: 500;
            color: ${isOrange ? '#ffffff' : '#8a4a1a'};
          `;
          tagEl.textContent = tag;
          tagsContainer.appendChild(tagEl);
        });

        card.appendChild(tagsContainer);

        // Connection line (SVG)
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: visible;
        `;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("stroke", isOrange ? "rgba(246, 130, 31, 0.5)" : "rgba(27, 23, 20, 0.2)");
        line.setAttribute("stroke-width", "1.5");
        line.setAttribute("stroke-dasharray", "3,3");
        svg.appendChild(line);

        cardContainer.appendChild(svg);
        cardContainer.appendChild(card);
        cardElements.push(card);

        // Store references for animation
        (card as any).svg = svg;
        (card as any).line = line;
        (card as any).worldPos = pos;
      }
    });

    // ── Arc connections ───────────────────────────────────────────────────
    ARCS.forEach(([ai, bi]) => {
      const a = hotVecs[ai];
      const b = hotVecs[bi];
      const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(1.38);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      addLine(curve.getPoints(60), 0.45, 0xffaa40);
    });

    // ── Animation ─────────────────────────────────────────────────────────
    let rafId: number;
    let t = 0;

    // Helper to project 3D to 2D screen coords
    const toScreenPosition = (vec: THREE.Vector3) => {
      const vector = vec.clone();
      vector.applyMatrix4(globe.matrixWorld);
      vector.project(camera);

      const x = (vector.x * 0.5 + 0.5) * w;
      const y = (-(vector.y * 0.5) + 0.5) * h;

      return { x, y, z: vector.z };
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.004;
      globe.rotation.y = t;
      globe.rotation.x = Math.sin(t * 0.18) * 0.10;

      // Update card positions
      cardElements.forEach((card) => {
        const worldPos = (card as any).worldPos;
        const screenPos = toScreenPosition(worldPos);

        // Hide cards on the back of the globe
        if (screenPos.z > 1) {
          card.style.opacity = "0";
        } else {
          card.style.opacity = "1";
          card.style.left = `${screenPos.x}px`;
          card.style.top = `${screenPos.y}px`;

          // Update connection line
          const line = (card as any).line;
          const cardRect = card.getBoundingClientRect();
          const containerRect = cardContainer.getBoundingClientRect();
          const cardCenterX = screenPos.x;
          const cardBottomY = screenPos.y;

          line.setAttribute("x1", String(cardCenterX));
          line.setAttribute("y1", String(cardBottomY));
          line.setAttribute("x2", String(cardCenterX));
          line.setAttribute("y2", String(cardBottomY + 40));
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!el) return;
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      if (el.contains(cardContainer)) el.removeChild(cardContainer);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
