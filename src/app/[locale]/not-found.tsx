import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-semibold text-primary">404</p>

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {t("title")}
      </h1>

      <p className="max-w-md text-muted-foreground">{t("description")}</p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" nativeButton={false} render={<Link href="/" />}>
          {t("primaryCta")}
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/contact" />}
        >
          {t("secondaryCta")}
        </Button>
      </div>
    </main>
  );
}
