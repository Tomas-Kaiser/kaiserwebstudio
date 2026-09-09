"use client";

import { useLocale, useTranslations } from "next-intl";
import { Menu, Check } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { localeInfo } from "@/i18n/locale-info";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Kaiser Web Studio
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label={t("menu")}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="!max-w-xs">
              <SheetHeader>
                <SheetTitle>{t("menu")}</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.key}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        {t(item.key)}
                      </Link>
                    }
                  />
                ))}
              </nav>

              <Separator />

              <div className="flex flex-col gap-1 px-4">
                <span className="px-2 text-xs font-medium text-muted-foreground">
                  {t("language")}
                </span>
                {routing.locales.map((loc) => (
                  <SheetClose
                    key={loc}
                    nativeButton={false}
                    render={
                      <Link
                        href={pathname}
                        locale={loc}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-muted",
                          loc === locale && "font-semibold"
                        )}
                      >
                        <span aria-hidden="true">{localeInfo[loc].flag}</span>
                        <span>{localeInfo[loc].label}</span>
                        <Check
                          className={cn("ml-auto", loc !== locale && "invisible")}
                        />
                      </Link>
                    }
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
