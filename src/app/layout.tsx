import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Palina ∞ Lukas - Wedding on 28.09.2026 in Seville",
    template: "%s - P | L",
  },
  description: "All the essential details for our beloved guests.",
  keywords: [
    "Wedding",
    "Seville",
    "Palina",
    "Lukas",
    "celebration",
    "love",
    "memories",
    "Special day",
    "Villa Luisa",
  ],
  authors: [{ name: "Palina & Lukas" }],
  creator: "Palina & Lukas",
  publisher: "Palina & Lukas",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Palina ∞ Lukas - Wedding on 28.09.2026 in Seville",
    description: "All the essential details for our beloved guests.",
    siteName: "Palina ∞ Lukas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Palina ∞ Lukas - Wedding on 28.09.2026 in Seville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palina ∞ Lukas - Wedding on 28.09.2026 in Seville",
    description: "All the essential details for our beloved guests.",
    images: ["/og-image.jpg"],
    creator: "@ausrobdev",
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
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body
        className={`${pinyonScript.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
