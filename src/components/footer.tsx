import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/nav-items";

const linkClass = "text-violet transition-colors hover:text-gold";

export function Footer() {
  const t = useTranslations("Nav");
  const tFooter = useTranslations("Footer");

  return (
    <footer className="relative bg-navy">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-full h-20 w-full text-navy sm:h-32"
      >
        <path
          d="M0,40 C240,0 480,90 720,45 C960,0 1200,80 1440,30 L1440,120 L0,120 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M0,65 C220,20 500,105 760,60 C1020,15 1240,90 1440,55 L1440,120 L0,120 Z"
          fill="currentColor"
          opacity="0.55"
        />
        <path
          d="M0,90 C240,50 520,110 780,80 C1040,50 1240,105 1440,75 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-4 lg:col-span-5">
            <Link href="/" className="text-xl font-semibold text-lavender">
              Kaiser Web Studio
            </Link>
            <p className="max-w-xs text-violet">{tFooter("tagline")}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            <nav aria-label={tFooter("navigate")} className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold text-lavender">
                {tFooter("navigate")}
              </h2>
              <Link href="/" className={linkClass}>
                {t("home")}
              </Link>
              {navItems.map((item) => (
                <Link key={item.key} href={item.href} className={linkClass}>
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold text-lavender">
                {tFooter("contact")}
              </h2>
              <Link
                href="/contact"
                className={`${linkClass} flex items-center gap-2`}
              >
                <Mail className="size-4 shrink-0" />
                {tFooter("contactForm")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-violet/80 sm:flex-row">
          <p>{tFooter("copyright", { year: new Date().getFullYear() })}</p>
          <Link href="/privacy" className="transition-colors hover:text-gold">
            {tFooter("privacyLink")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
