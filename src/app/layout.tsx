import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/lib";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Ndoto — dating for Africa and the diaspora", template: "%s · Ndoto" },
  description:
    "Ndoto connects people at home and in the diaspora who are looking for something real. Browse freely, unlock the profiles you care about, and chat safely.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
