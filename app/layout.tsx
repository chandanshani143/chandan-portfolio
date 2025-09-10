import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";

const inter =  Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Chandan Portfolio",
  description: "Portfolio of Chandan Kumar Shani",
  icons: {
    icon: { url: '/profile_icon3.png', type: 'image/png' },  // single PNG icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiase`}>
        {children}
      </body>
    </html>
  );
}
