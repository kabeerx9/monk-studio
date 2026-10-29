

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { ThemeProvider } from "./provider";



export const metadata: Metadata = {
  metadataBase: new URL('https://monk-studio.vercel.app'),
  title: "Monk Studio | Strategy, Design & Digital Engineering",
  description: "An independent digital product studio connecting strategy, design, and engineering to build considered websites, platforms, and applications.",
  icons: {
    icon: [
      {
        url: "/monk-logo.svg",
        href: "/monk-logo.svg",
      },
    ],
  },
  openGraph: {
    title: "Monk Studio | Strategy, Design & Digital Engineering",
    description: "An independent digital product studio connecting strategy, design, and engineering.",
    images: ["/monk-logo.svg"],
    url: 'https://monk-studio.vercel.app',
    siteName: 'Monk Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Monk Studio | Strategy, Design & Digital Engineering",
    description: "An independent digital product studio connecting strategy, design, and engineering.",
    images: ["/monk-logo.svg"],
    creator: "@mediamonk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/monk-logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
