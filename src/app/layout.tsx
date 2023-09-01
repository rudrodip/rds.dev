import "@src/styles/globals.css";
import { ThemeProvider } from "@src/components/theme-provider";
import Navbar from "@src/components/Navbar/DefaultNavbar";
import Footer from "@src/components/Footer/Footer";
import { cn } from "@lib/utils";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

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
    "Rudrodip Sarker is a student at Rajshahi College and enthusiast computer programmer who creates web apps, mobile apps, backend, Python scripts for automation, embedded system programming with C++, robotics, and more.",
  url: "https://rudrodip.vercel.app/",
  siteName: "Rudrodip Sarker",
  icons: {
    icon: "/assets/logo/logo.png",
  },
  images: [
    {
      url: "https://avatars.githubusercontent.com/u/77154365?v=4",
      width: 800,
      height: 600,
      alt: "Rudrodip Sarker",
    },
  ],
  locale: "bn_BD",
  type: "website",
  // OpenGraph metadata
  openGraph: {
    title: "Rudrodip Sarker",
    description:
      "I am Rudrodip Sarker, a student at Rajshahi College and enthusiast computer programmer building webapps, mobile apps, backend, python scripts for automation, embedded systems programming, robotics, and visualizing mathematical concepts using programming.",
    url: "https://rudrodip.vercel.app",
    siteName: "Rudrodip Sarker",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/77154365?v=4",
        width: 1200,
        height: 630,
        alt: "Rudrodip Sarker",
      },
    ],
    type: "website",
    locale: "bn_BD",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@rds_agi",
    title: "Rudrodip Sarker",
    description:
      "I am Rudrodip Sarker, a student at Rajshahi College and enthusiast computer programmer building webapps, mobile apps, backend, python scripts for automation, embedded systems programming, robotics, and visualizing mathematical concepts using programming.",
    image: {
      url: "https://avatars.githubusercontent.com/u/77154365?v=4",
      width: 1200,
      height: 630,
      alt: "Rudrodip Sarker",
    },
  },

  // Discord metadata
  discord: {
    title: "Rudrodip Sarker",
    type: "website",
    url: "https://rudrodip.vercel.app",
    description:
      "I am Rudrodip Sarker, a student at Rajshahi College and enthusiast computer programmer building webapps, mobile apps, backend, python scripts for automation, embedded systems programming, robotics, and visualizing mathematical concepts using programming.",
    image: {
      url: "https://avatars.githubusercontent.com/u/77154365?v=4",
      width: 1200,
      height: 630,
      alt: "Rudrodip Sarker",
    },
  },
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
