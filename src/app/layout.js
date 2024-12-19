import { Outfit, Oswald } from "next/font/google";
import "./globals.css";

//relative path import
import Layout from "@/components/Layout/page";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-oswald",
});

export const metadata = {
  title: "Frontend Developer - Parth ",
  description: "web development company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V5RYCES5J9"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V5RYCES5J9');`}
      </Script>
      <body className={`${outfit.variable} ${oswald.variable}`}>
        <Layout childern={children} />
      </body>
    </html>
  );
}
