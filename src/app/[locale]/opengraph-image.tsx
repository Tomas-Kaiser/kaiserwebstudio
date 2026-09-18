import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 32,
          padding: "96px",
          background: "#f5f1e8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #004b9b 0%, #6c44a4 100%)",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 64 64" fill="none">
              <path
                d="M16,42 L16,22 L24,31 L32,14 L40,31 L48,22 L48,42 Z"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <rect x="15" y="41" width="34" height="6" rx="2" fill="#ffffff" />
              <circle cx="16" cy="22" r="3" fill="#ffffff" />
              <circle cx="32" cy="14" r="3" fill="#ffffff" />
              <circle cx="48" cy="22" r="3" fill="#ffffff" />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#0d1218" }}>
            {t("title")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 46,
            fontWeight: 600,
            color: "#0d1218",
            maxWidth: 940,
            lineHeight: 1.3,
          }}
        >
          {t("description")}
        </div>
      </div>
    ),
    { ...size }
  );
}
