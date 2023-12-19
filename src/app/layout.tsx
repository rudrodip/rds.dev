import "@src/styles/globals.css";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "@src/components/theme-provider";
import { Provider } from "@src/components/wallet/Provider";
import Navbar from "@src/components/Navbar/DefaultNavbar";
import Footer from "@src/components/Footer/Footer";
import { cn } from "@src/lib/utils";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { siteConfig } from "@src/config/site";
import { MiniNavbar } from "@src/components/Navbar/MiniNavbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../../public/assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Rudrodip",
    "Rudrodip Sarker",
    "Rudrodip Sarker Sumit",
    "rds",
    "rds_agi",
    "I'm banana man",
    "discord banana",
    "rds rcsc",
    "rcsc",
    "rajshahi college science club",
    "Sumit",
    "Sumit Sarker",
    "martian_agi",
    "ml dev",
    "full stack dev",
    "iot dev",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // OpenGraph metadata
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@rds_agi",
    title: siteConfig.name,
    description: siteConfig.description,
    images: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: "Rudrodip Sarker",
    },
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn(inter.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Provider>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <header className="z-40 mx-2">
                  <Navbar />
                </header>
                <MiniNavbar />
                <div className="app">{children}</div>
              </div>
              <Footer />
            </div>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
