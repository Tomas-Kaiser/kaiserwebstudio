import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Check, ExternalLink, Quote } from "lucide-react";
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

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type ShowcaseItem = {
  tag: string;
  projectTitle: string;
  projectDescription: string;
  highlights: string[];
};

type ShowcaseMeta = {
  domain: string;
  url: string;
  desktopImage: string;
  mobileImage: string;
  mobilePosition: string;
};

const showcaseMeta: ShowcaseMeta[] = [
  {
    domain: "hajekjan.com",
    url: "https://www.hajekjan.com",
    desktopImage: "/images/showcase/hajekjan.png",
    mobileImage: "/images/showcase/hajekjan-mobile.png",
    mobilePosition: "center 45%",
  },
  {
    domain: "ravenbooks-two.vercel.app",
    url: "https://ravenbooks-two.vercel.app/",
    desktopImage: "/images/showcase/storebook.png",
    mobileImage: "/images/showcase/storebook-mobile.png",
    mobilePosition: "center top",
  },
];

function WaveBackground({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-40 w-full sm:h-48",
        className
      )}
    >
      <path
        d="M0,30 C240,55 480,10 720,25 C960,40 1200,10 1440,30 L1440,150 L0,150 Z"
        fill="#d8d2ea"
        opacity="0.35"
      />
      <path
        d="M0,55 C220,80 440,45 740,60 C1040,75 1220,45 1440,65 L1440,150 L0,150 Z"
        fill="#d8d2ea"
        opacity="0.65"
      />
      <path
        d="M0,80 C220,100 460,70 760,80 C1040,90 1220,70 1440,85 L1440,150 L0,150 Z"
        fill="#d8d2ea"
      />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Home() {
  const t = useTranslations("Home");
  const tShowcase = useTranslations("Showcase");
  const showcaseItems = tShowcase.raw("items") as ShowcaseItem[];
  const tProcess = useTranslations("Process");
  const steps = tProcess.raw("steps") as ProcessStep[];
  const tTestimonials = useTranslations("Testimonials");
  const testimonials = tTestimonials.raw("items") as Testimonial[];
  const tPackages = useTranslations("Packages");
  const tiers = tPackages.raw("tiers") as PackageTier[];

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex min-h-[80dvh] w-full flex-col items-center justify-between gap-10 bg-navy px-4 pt-24 text-center lg:pt-20">
        <div className="flex flex-col items-center gap-6 sm:max-w-5xl">
          <Badge className="border-gold/40 bg-gold/15 text-gold">
            {t("eyebrow")}
          </Badge>

          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-balance text-lavender sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          <p className="max-w-3xl text-violet sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              {t("primaryCta")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-violet/50 bg-transparent text-lavender hover:bg-white/10 hover:text-gold dark:bg-transparent dark:hover:bg-white/10"
              nativeButton={false}
              render={<Link href="/services" />}
            >
              {t("secondaryCta")}
            </Button>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-2xl">
          <div aria-hidden="true" className="pb-[37.5%]" />
          <Image
            src="/images/hero-illustration.svg"
            alt={t("imageAlt")}
            width={800}
            height={600}
            priority
            className="absolute inset-x-0 top-0 w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-muted/30 px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 w-full max-w-2xl">
            <div aria-hidden="true" className="pb-[37.5%]" />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {tShowcase("title")}
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              {tShowcase("subtitle")}
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-24 lg:gap-32">
            {showcaseItems.map((item, index) => {
              const meta = showcaseMeta[index];
              const reversed = index % 2 === 1;
              return (
                <article
                  key={item.projectTitle}
                  className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
                >
                  <div
                    className={cn(
                      "relative pb-8 lg:col-span-7",
                      reversed && "lg:order-2"
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 top-8 -bottom-2 rounded-full bg-linear-to-br from-primary/30 to-brand-purple/30 blur-3xl"
                    />

                    <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                      <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-destructive/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-green/50" />
                        <span className="ml-3 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                          {meta.domain}
                        </span>
                      </div>
                      <Image
                        src={meta.desktopImage}
                        alt={item.projectTitle}
                        width={1400}
                        height={900}
                        className="w-full"
                      />
                    </div>

                    <div
                      className={cn(
                        "absolute bottom-0 w-[28%] min-w-24 overflow-hidden rounded-[1.1rem] border-4 border-navy bg-navy shadow-2xl sm:rounded-3xl",
                        reversed ? "left-3 sm:-left-4" : "right-3 sm:-right-4"
                      )}
                    >
                      <Image
                        src={meta.mobileImage}
                        alt=""
                        width={585}
                        height={1266}
                        sizes="(min-width: 1024px) 20vw, 30vw"
                        quality={95}
                        className="aspect-[9/19] w-full object-cover"
                        style={{ objectPosition: meta.mobilePosition }}
                      />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col items-start gap-4 text-left lg:col-span-5",
                      reversed && "lg:order-1"
                    )}
                  >
                    <Badge className="border-gold/50 bg-gold/20 text-foreground">
                      {item.tag}
                    </Badge>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {item.projectTitle}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.projectDescription}
                    </p>

                    <ul className="flex flex-col gap-2.5 text-sm">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      size="lg"
                      className="mt-2 h-10 px-4"
                      nativeButton={false}
                      render={
                        <a
                          href={meta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      {tShowcase("cta")}
                      <ExternalLink data-icon="inline-end" />
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <Badge variant="secondary">{tProcess("eyebrow")}</Badge>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight">
              {tProcess("title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {tProcess("subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center gap-3 text-center">
                <div className="relative flex size-12 items-center justify-center">
                  <svg viewBox="0 0 48 48" className="absolute inset-0 size-full text-primary">
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      fill="currentColor"
                      fillOpacity="0.1"
                      stroke="currentColor"
                      strokeOpacity="0.25"
                    />
                  </svg>
                  <span className="text-base font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-6 -right-4 hidden size-5 -translate-y-1/2 text-muted-foreground/50 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="packages"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,var(--background)_0,var(--background)_160px,#d8d2ea_160px,#d8d2ea_100%)] px-4 pt-32 pb-20 sm:bg-[linear-gradient(to_bottom,var(--background)_0,var(--background)_192px,#d8d2ea_192px,#d8d2ea_100%)] sm:pt-36"
      >
        <WaveBackground />

        <div className="relative mx-auto max-w-6xl">
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

      <section className="bg-background px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-xl text-center">
            <Badge variant="secondary">{tTestimonials("eyebrow")}</Badge>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight">
              {tTestimonials("title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {tTestimonials("subtitle")}
            </p>
          </div>

          <div
            className={cn(
              "mt-12 grid gap-6",
              testimonials.length === 1
                ? "mx-auto max-w-xl"
                : "sm:grid-cols-3"
            )}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="flex h-full flex-col gap-4 pt-2">
                  <Quote className="size-5 text-primary/50" />

                  <p className="flex-1 text-sm text-muted-foreground italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
