import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata = {
  title: "SF Countdown",
  description: "Over here being ridiculous.",
  openGraph: {
    title: "San Francisco Countdown",
    description: "This is so dumb omg",
    url: "https://sf-countdown.vercel.app/",
    siteName: "SF Countdown",
    images: [
      {
        url: "https://sf-countdown.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Gate with event countdown overlay, why did I do this?",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body>{children}</body>
    </html>
  );
}
