import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PackageTier = {
  name: string;
  badge?: string;
  description: string;
  priceLabel: string;
  features: string[];
  cta: string;
};

export default function Home() {
  const t = useTranslations("Home");
  const tShowcase = useTranslations("Showcase");
  const tPackages = useTranslations("Packages");
  const tiers = tPackages.raw("tiers") as PackageTier[];

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 overflow-hidden px-4 pt-[30px] pb-14 sm:flex-row sm:items-center lg:gap-14 lg:overflow-visible lg:pt-0 lg:pb-16">
        <Image
          src="/images/hero-illustration.svg"
          alt={t("imageAlt")}
          width={800}
          height={600}
          priority
          className="hidden sm:order-2 sm:block sm:w-[480px] sm:max-w-none sm:shrink-0 lg:w-full lg:max-w-2xl lg:min-w-0 lg:shrink lg:flex-1"
        />

        <div className="flex flex-col items-center gap-6 text-center sm:order-1 sm:max-w-md sm:shrink-0 sm:translate-x-[40px] sm:items-start sm:text-left lg:translate-x-[100px]">
          <Badge variant="secondary">{t("eyebrow")}</Badge>

          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {t("title")}
          </h1>

          <p className="max-w-xl text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
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

      <section id="packages" className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              {tPackages("title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {tPackages("subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="relative">
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    {tier.badge}
                  </Badge>
                )}

                <Card
                  className={cn(
                    "flex h-full flex-col",
                    tier.badge && "ring-2 ring-primary"
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col gap-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      {tier.priceLabel}
                    </p>

                    <ul className="flex flex-1 flex-col gap-2.5 text-sm">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="mt-2 w-full"
                      variant={tier.badge ? "default" : "outline"}
                      nativeButton={false}
                      render={<Link href="/contact" />}
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
