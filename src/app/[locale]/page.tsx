import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <Badge variant="secondary">{t("eyebrow")}</Badge>

      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {t("title")}
      </h1>

      <p className="max-w-xl text-muted-foreground sm:text-lg">
        {t("subtitle")}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
          {t("primaryCta")}
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/services" />}
        >
          {t("secondaryCta")}
        </Button>
      </div>
    </main>
  );
}
