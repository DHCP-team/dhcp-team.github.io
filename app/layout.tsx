import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const pressStart = Press_Start_2P({
  variable: "--font-pressstart",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHCP — Diponegoro Hacking Core of Pwning",
  description:
    "Official site of DHCP (Diponegoro Hacking Core of Pwning) — cybersecurity community of Diponegoro University.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
