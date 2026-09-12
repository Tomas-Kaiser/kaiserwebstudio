import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col items-center justify-center gap-4 bg-background px-4 py-24 text-center text-foreground">
        <p className="text-sm font-semibold text-primary">404</p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>

        <p className="max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>

        <Link
          href="/en"
          className="mt-4 inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
        >
          Back to home
        </Link>
      </body>
    </html>
  );
}
