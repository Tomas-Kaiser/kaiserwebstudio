"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactMessage, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton({
  label,
  pendingLabel,
}: {
  label: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full self-center sm:w-fit"
    >
      {pending ? pendingLabel : label}
    </Button>
  );
}

export function ContactForm() {
  const t = useTranslations("Contact");
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="size-8 text-primary" />
        <h2 className="text-lg font-semibold">{t("successTitle")}</h2>
        <p className="text-muted-foreground">{t("successMessage")}</p>
      </div>
    );
  }

  const errorMessage =
    state.status === "error"
      ? state.error === "missing"
        ? t("errorMissing")
        : state.error === "invalidEmail"
          ? t("errorInvalidEmail")
          : t("errorSend")
      : null;

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">{t("nameLabel")}</Label>
        <Input id="name" name="name" placeholder={t("namePlaceholder")} required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">{t("emailLabel")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">{t("messageLabel")}</Label>
        <Textarea
          id="message"
          name="message"
          rows={8}
          placeholder={t("messagePlaceholder")}
          required
        />
      </div>

      {errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}

      <SubmitButton label={t("submit")} pendingLabel={t("sending")} />
    </form>
  );
}
