import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "WYSIWYG selector",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.className} antialiased min-h-[100vh] flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
