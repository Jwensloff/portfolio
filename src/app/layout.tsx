import { Inter } from 'next/font/google';
import './globals.css';
// import '@mantine/carousel/styles.css';

const inter = Inter({ subsets: ['latin'] });
// import { MantineProvider } from '@mantine/core';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <MantineProvider> */}
        <body className={inter.className}>{children}</body>
      {/* </MantineProvider> */}
    </html>
  );
}
