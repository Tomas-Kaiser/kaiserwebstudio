"use client";

import { useLocale } from "next-intl";
import { Globe, Check } from "lucide-react";
import { routing } from "@/i18n/routing";
import { localeInfo } from "@/i18n/locale-info";
import { Link, usePathname } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Change language"
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "cursor-pointer text-lavender hover:bg-white/10 hover:text-gold aria-expanded:bg-white/10 aria-expanded:text-gold"
        )}
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
