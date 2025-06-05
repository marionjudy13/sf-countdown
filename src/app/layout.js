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
  icons: {
    icon: "/sf-favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body>{children}</body>
    </html>
  );
}
