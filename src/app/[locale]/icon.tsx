import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#004b9b",
          borderRadius: "50%",
          color: "#ffffff",
          fontFamily: "sans-serif",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
