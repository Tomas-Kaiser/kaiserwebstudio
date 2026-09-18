import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#004b9b" />
            <stop offset="100%" stopColor="#6c44a4" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="32" fill="url(#g)" />
        <path
          d="M16,42 L16,22 L24,31 L32,14 L40,31 L48,22 L48,42 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <rect x="15" y="41" width="34" height="6" rx="2" fill="#ffffff" />
        <circle cx="16" cy="22" r="3" fill="#ffffff" />
        <circle cx="32" cy="14" r="3" fill="#ffffff" />
        <circle cx="48" cy="22" r="3" fill="#ffffff" />
      </svg>
    ),
    { ...size }
  );
}
