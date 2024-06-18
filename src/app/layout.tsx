import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

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
      <head>
        <ColorSchemeScript />
      </head>

      <body className={inter.className}>
        <MantineProvider>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
