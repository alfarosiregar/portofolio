import "@/styles/globals.css";
import "boxicons/css/boxicons.min.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layouts/theme-provider";
import { ModeToggle } from "@/components/layouts/mode-toggle";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Afdol Fahmul Rozi</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className={inter.className}>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
