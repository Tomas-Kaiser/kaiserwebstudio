import Image from "next/image";
import { useTranslations } from "next-intl";
import { Code2, Layers, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type Highlight = {
  title: string;
  description: string;
};

const icons = [Code2, Layers, Sparkles];

export default function AboutPage() {
  const t = useTranslations("About");
  const highlights = t.raw("highlights") as Highlight[];

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 pt-[30px] pb-16 sm:flex-row sm:items-start lg:pt-16">
        <div className="relative aspect-[4/5] w-56 shrink-0 overflow-hidden rounded-2xl sm:w-64">
          <Image
            src="/images/Tomas_studio_prg.JPG"
            alt={t("photoAlt")}
            fill
            className="object-cover opacity-90 grayscale-[75%]"
            sizes="(min-width: 640px) 256px, 224px"
            priority
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <Badge variant="secondary">{t("eyebrow")}</Badge>

          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("title")}
          </h1>

          <p className="max-w-2xl text-muted-foreground sm:text-lg">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = icons[index];
            return (
              <Card key={highlight.title}>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="mt-3 text-lg">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("ctaTitle")}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          {t("ctaSubtitle")}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            {t("ctaPrimary")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/services" />}
          >
            {t("ctaSecondary")}
          </Button>
        </div>
      </section>
    </main>
  );
}
