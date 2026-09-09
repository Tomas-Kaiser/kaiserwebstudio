"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = {
  cs: "CS",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={cn(
            "px-2 py-1 rounded-md hover:bg-accent",
            loc === locale && "font-semibold text-foreground",
            loc !== locale && "text-muted-foreground"
          )}
        >
          {labels[loc]}
        </Link>
      ))}
    </div>
  );
}
