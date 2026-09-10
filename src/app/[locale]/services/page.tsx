import { useTranslations } from "next-intl";
import {
  Palette,
  Code2,
  ClipboardList,
  LayoutDashboard,
  Search,
  LifeBuoy,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type ServiceItem = {
  name: string;
  description: string;
};

const icons = [Palette, Code2, ClipboardList, LayoutDashboard, Search, LifeBuoy];

export default function ServicesPage() {
  const t = useTranslations("Services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-3xl px-4 pt-[30px] pb-16 text-center lg:pt-16">
        <Badge variant="secondary">{t("eyebrow")}</Badge>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
          {t("subtitle")}
        </p>
      </section>

      <section className="border-t border-border px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card key={item.name}>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="mt-3 text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
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
            render={<Link href="/#packages" />}
          >
            {t("ctaSecondary")}
          </Button>
        </div>
      </section>
    </main>
  );
}
