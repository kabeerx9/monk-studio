

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { ThemeProvider } from "./provider";



export const metadata: Metadata = {
  metadataBase: new URL('https://mediamonk.studio'),
  title: "Media Monk Studio | Digital Innovation & Web Development",
  description: "We create stunning digital experiences that drive results. Specializing in modern web development, e-commerce solutions, and digital innovation.",
  icons: {
    icon: [
      {
        url: "/monk-logo.svg",
        href: "/monk-logo.svg",
      },
    ],
  },
  openGraph: {
    title: "Media Monk Studio | Digital Innovation & Web Development",
    description: "We create stunning digital experiences that drive results. Specializing in modern web development, e-commerce solutions, and digital innovation.",
    images: ["/monk-logo.svg"],
    url: 'https://mediamonk.studio',
    siteName: 'Media Monk Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Monk Studio | Digital Innovation & Web Development",
    description: "We create stunning digital experiences that drive results. Specializing in modern web development, e-commerce solutions, and digital innovation.",
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
