import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "./page";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Provider";
import dynamic from 'next/dynamic';

const FluidCursor = dynamic(() => import("@/components/ui/animate-cursor"), { 
  ssr: false 
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://Quickfolio.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Quickfolio`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "bitly url shortener",
    "bitly link shortener",
    "link shortener",
    "url shortener",
    "bitly link",
    "tinyurls",
    "all in one link",
    "free url shortener",
    "linknode",
    "onelink",
    "social links",
    "free linktree",
    "link in bio",
    "short my url",
    "my links",
    "Quickfolio",
    "Quickfolio",
    "mtLink",
  ],
  authors: [
    {
      name: "Sakthivel Pandiyan",
      url: "https://github.com/sakthivel2264",
    },
  ],
  creator: "Sakthivel Pandiyan",
 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og-image.png`],
  //   creator: "",
  // },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            {/* <Navbar /> */}
            <div className=" relative flex-grow flex-1">{children}</div>
            {/* <Footer /> */}
          </Providers>
        </main>
      </body>
    </html>
  );
}
