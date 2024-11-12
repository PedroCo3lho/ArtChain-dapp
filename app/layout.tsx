// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import NavBar from "./components/NavBar";
import { AuthProvider } from "./providers/AuthContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-white`}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
