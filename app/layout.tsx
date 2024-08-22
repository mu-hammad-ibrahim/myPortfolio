import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ibrahim | Portfolio",
  description:
    "Muhammad Ibrahim is a passionate web developer specializing in creating innovative, user-friendly websites. Explore my portfolio, projects, and get in touch to bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="[--color:#3366ff] pointer-events-none -z-[2] mx-auto h-[60rem] overflow-hidden my-[-18.8rem] absolute inset-0 w-full opacity-80 dark:opacity-40 [background-image:radial-gradient(circle_at_top_center,var(--color),transparent_80%)]" />
          <main className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 relative">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
