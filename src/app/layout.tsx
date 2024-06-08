import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";
// const inter = Inter({ subsets: ["latin"] });
import logo from "@/assets/logo/blood labs.svg";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Blood Labs",
  description: "Donate Your Blood for help people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <Head>
          <link rel="icon" href="./bloodLabs.png" />
        </Head>
        <body>
          <AppRouterCacheProvider>
            <Toaster position="top-center" />
            {children}
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
