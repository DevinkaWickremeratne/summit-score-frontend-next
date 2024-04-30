import type { Metadata } from "next";
import './globals.scss';
import { getServerSession } from 'next-auth/next';
import { Inter } from 'next/font/google';
import { authOptions } from './api/auth/[...nextauth]/auth';
import Provider from './context/client-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <Provider session={session}>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
