import { useTranslations } from "next-intl";

type PrivacySection = {
  heading: string;
  paragraphs: string[];
};

export default function PrivacyPage() {
  const t = useTranslations("Privacy");
  const sections = t.raw("sections") as PrivacySection[];

  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-2xl px-4 pt-[30px] pb-16 lg:pt-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("updated")}</p>

        <p className="mt-6 text-muted-foreground">{t("intro")}</p>

        <div className="mt-10 flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.length > 1 ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  {section.paragraphs.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-muted-foreground">
                  {section.paragraphs[0]}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
