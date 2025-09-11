import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Game Score",
  description: "Find games to play using OSTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
