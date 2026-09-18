import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #004b9b 0%, #6c44a4 100%)",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64" fill="none">
          <path
            d="M16,42 L16,22 L24,31 L32,14 L40,31 L48,22 L48,42 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <rect x="15" y="41" width="34" height="6" rx="2" fill="#ffffff" />
          <line x1="16" y1="22" x2="40" y2="31" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
          <line x1="48" y1="22" x2="24" y2="31" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
          <line x1="16" y1="22" x2="48" y2="22" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
          <circle cx="16" cy="22" r="3" fill="#ffffff" />
          <circle cx="32" cy="14" r="3" fill="#ffffff" />
          <circle cx="48" cy="22" r="3" fill="#ffffff" />
          <circle cx="24" cy="31" r="2" fill="#ffffff" />
          <circle cx="40" cy="31" r="2" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
