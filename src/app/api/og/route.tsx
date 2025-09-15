// app/api/og/route.tsx
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

async function loadFont() {
  const res = await fetch(
    new URL("./Inter-Bold.ttf", import.meta.url) // put the TTF next to this file
  );
  return res.arrayBuffer();
}

export async function GET(request: NextRequest) {
  try {
    const fontData = await loadFont().catch(() => undefined);

    const { searchParams } = new URL(request.url);
    const title = (searchParams.get("title") || "Heaps Smart").trim();
    const tagline = searchParams.get("tagline") || "Technology for Good";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
            background: "linear-gradient(135deg, #111111 0%, #333333 100%)",
            color: "#fff",
          }}
        >
          {/* Top brand row */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            {/* Inline your SVG wordmark or icon here (kept simple for brevity) */}
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -0.5 }}>
              HEAPS SMART
            </div>
          </div>

          {/* Title (wrap + clamp) */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 1000,
              display: "block",
              // crude clamp: if very long, reduce size a bit
              ...(title.length > 70 ? { fontSize: 56 } : {}),
              ...(title.length > 110 ? { fontSize: 48 } : {}),
              marginBottom: 16,
            }}
          >
            {title}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              opacity: 0.85,
              maxWidth: 900,
            }}
          >
            {tagline}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fontData
          ? [{ name: "Inter", data: fontData, style: "normal", weight: 700 }]
          : undefined,
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
        },
      }
    );
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    return new Response(`Failed to generate the image: ${errorMessage}`, { status: 500 });
  }
}
