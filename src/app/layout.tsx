import type { Metadata } from "next";
import { Rufina, Lato } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const rufina = Rufina({
  variable: "--font-rufina",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Mealio — Seasonal Restaurant & Honest Food",
    template: "%s | Mealio",
  },
  description:
    "Mealio is a seasonal restaurant celebrating honest food, fresh ingredients and carefully crafted menus. Discover our dishes, our story and how to find us.",
  openGraph: {
    title: "Mealio — Seasonal Restaurant & Honest Food",
    description:
      "A seasonal restaurant celebrating honest food, fresh ingredients and carefully crafted menus.",
    type: "website",
    siteName: "Mealio",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rufina.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
