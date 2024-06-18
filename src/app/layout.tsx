import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>

      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        {children}
      </body>
    </html>
  );
}
