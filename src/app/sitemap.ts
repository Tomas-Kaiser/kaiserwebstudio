import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

const pages = ["", "/about", "/services", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteUrl}/${l}${page}`])
        ),
      },
    }))
  );
}
