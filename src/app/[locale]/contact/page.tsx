import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Nav");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-semibold">{t("contact")}</h1>
    </main>
  );
}
