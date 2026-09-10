import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/nav-items";

export function Footer() {
  const t = useTranslations("Nav");
  const tFooter = useTranslations("Footer");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 text-center">
        <Link href="/" className="font-semibold">
          Kaiser Web Studio
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          {tFooter("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
