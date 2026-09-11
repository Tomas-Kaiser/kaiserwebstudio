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
              background: "#004b9b",
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            K
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
