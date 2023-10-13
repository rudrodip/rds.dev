import "@src/styles/globals.css";
import { ThemeProvider } from "@src/components/theme-provider";
import Navbar from "@src/components/Navbar/DefaultNavbar";
import Footer from "@src/components/Footer/Footer";
import { cn } from "@src/lib/utils";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { siteConfig } from "@src/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../../public/assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: "https://rudrodip.vercel.app",
  title: "Rudrodip Sarker",
  description:
    "Hey! I'm Rudrodip Sarker, a student at Rajshahi College and enthusiast computer programmer who creates web apps, mobile apps, backend, Python scripts for automation, embedded system programming with C++, robotics, and more.",
  url: "https://rudrodip.vercel.app/",
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
      name: "rudrodip",
      url: "https://rudrodip.vercel.app",
    },
  ],
  creator: "rudrodip",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  siteName: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  images: [
    {
      url: siteConfig.ogImage,
      width: 800,
      height: 600,
      alt: siteConfig.name,
    },
  ],
  locale: "bn_BD",
  type: "website",
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
    locale: "bn_BD",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@rds_agi",
    title: siteConfig.name,
    description: siteConfig.description,
    image: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: "Rudrodip Sarker",
    },
  },

  // Discord metadata
  discord: {
    title: siteConfig.name,
    type: "website",
    url: siteConfig.url,
    description: siteConfig.description,
    image: {
      url: siteConfig.url,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
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
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              <div className="main">
                <div className="gradient" />
              </div>
              <Navbar />
              <div className="app">{children}</div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
