import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.harounkhmiri.xyz/"),
  title: {
    default: siteConfig.name,
    template: `%s - Data Scientist`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "Haroun",
    "Khmiri",
    "Haroun Khmiri",
    "haroun",
    "khmiri",
    "Game Developer",
    "Game Dev",
    "game developer",
    "game dev",
    "Haroun Game Developer",
    "Haroun game dev",
    "haroun khmiri game dev",
    "game programmer",
    "programmer",
    "developer",
    "haroun khmiri Developer",
    "game development",
    "game designer",
    "Game Development Portfolio",
    "game development portfolio",
    "game",
    "portfolio",
    "Haroun Khmiri",
    "harounkhmiri",
    "indie game developer",
    "@HarounKhmiri",
    "HarounKhmiriDev",
    "Khmiri game dev",
    "Data Science",
    "AI",
    "Engineer",
    "AI Engineer",
    "Deep Learning Developer",
    "machine Learning Developer",
    "Neural Network"
  ],

  authors: [
    {
      name: "Haroun Khmiri",
      url: "https://github.com/Haroun-Jinzo",
    },
  ],
  creator: "Haroun Khmiri",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@HarounKhmiri",
  },
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
      <head>
      <meta name="google-site-verification" content="JUxGwefytSDxyGZnUl-RtyV6BlerLuehaItGGFxIXdE" />
      </head>
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:0px_0px]",
            
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
