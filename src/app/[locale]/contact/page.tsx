import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-lg px-4 pt-[30px] pb-16 lg:pt-16">
        <div className="text-center">
          <Badge variant="secondary">{t("eyebrow")}</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
