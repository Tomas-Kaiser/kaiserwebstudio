import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("Home");
  const tShowcase = useTranslations("Showcase");

  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
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
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              {tShowcase("title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {tShowcase("subtitle")}
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green/50" />
              <span className="ml-3 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                hajekjan.com
              </span>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden sm:hidden">
              <Image
                src="/images/showcase/hajekjan-mobile.png"
                alt={tShowcase("projectTitle")}
                fill
                className="object-cover object-[center_35%]"
              />
            </div>
            <Image
              src="/images/showcase/hajekjan.png"
              alt={tShowcase("projectTitle")}
              width={1400}
              height={900}
              className="hidden w-full sm:block"
            />
          </div>

          <div className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-2 text-center">
            <h3 className="text-lg font-semibold">
              {tShowcase("projectTitle")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {tShowcase("projectDescription")}
            </p>
            <Button
              variant="outline"
              className="mt-2"
              nativeButton={false}
              render={
                <a
                  href="https://www.hajekjan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {tShowcase("cta")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
