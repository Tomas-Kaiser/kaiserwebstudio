"use client";

import { useLocale } from "next-intl";
import { Globe, Check } from "lucide-react";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const localeInfo: Record<string, { label: string; flag: string }> = {
  cs: { label: "Čeština", flag: "🇨🇿" },
  en: { label: "English", flag: "🇬🇧" },
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Change language"
        className={buttonVariants({ variant: "ghost", size: "icon" })}
      >
        <Globe />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            render={
              <Link href={pathname} locale={loc}>
                <span aria-hidden="true">{localeInfo[loc].flag}</span>
                <span>{localeInfo[loc].label}</span>
                <Check
                  className={cn(
                    "ml-auto",
                    loc !== locale && "invisible"
                  )}
                />
              </Link>
            }
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
