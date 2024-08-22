import React from "react";
import { BorderBeam } from "./magicui/border-beam";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const Border: React.FC = () => {
  const codeString = `import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen SaaS Platform",
  description: "A cutting-edge SaaS platform that brings your business to the next level.",
  keywords: ["SaaS", "business", "technology", "cloud"],
  author: "NextGen Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>

          {/* Background Effect */}
          <div className="[--color:#0070f3] pointer-events-none absolute inset-0 -z-10 w-full h-[50rem] opacity-60 dark:opacity-40 [background-image:radial-gradient(circle_at_top,var(--color),transparent_90%)]" />

          {/* Main Content */}
          <main className="mx-auto w-full max-w-screen-xl px-6 md:px-12 relative">
            <section className="py-12 text-center">
              <h1 className="text-5xl font-bold">NextGen SaaS</h1>
              <p className="text-xl mt-4">Grow your business with our platform</p>
            </section>

            <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-semibold">Feature 1</h2>
                <p className="mt-2">Detailed explanation of this awesome feature.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-semibold">Feature 2</h2>
                <p className="mt-2">Detailed explanation of another great feature.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-semibold">Feature 3</h2>
                <p className="mt-2">Another feature to help grow your business.</p>
              </div>
            </section>

            {children}
          </main>

          <footer className="py-8 text-center text-gray-600">
            <p>&copy; 2024 NextGen SaaS. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
`;

  return (
    <section className="relative h-[600px] md:h-[500px]">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        {/* Code Container */}
        <div className="h-full w-full relative border border-solid shadow-[0px_10px_63px_7px_rgba(0,0,0,0.1)]">
          {/* Sidebar */}
          <div className="absolute hidden left-0 bottom-0 h-[calc(100%_-_40px)] w-[40px] lg:flex flex-col items-center py-3 text-sm text-secondary-foreground border-r-2 border-border sm:flex"></div>

          {/* Top control bar */}
          <div className="absolute top-0 w-full h-[40px] flex items-center border-b-2 border-border px-2.5">
            <span className="w-3 h-3 m-1 rounded-full bg-[#FF453A]"></span>
            <span className="w-3 h-3 m-1 rounded-full bg-[#FFD60A]"></span>
            <span className="w-3 h-3 m-1 rounded-full bg-[#30D158]"></span>
            <div className="mx-5 ml-5 px-5 pt-2 text-xs h-full border-b-4 border-l border-r border-border">
              Layout.tsx
            </div>
          </div>

          {/* Code display */}
          <div className="absolute right-0 bottom-0 h-[calc(100%_-_40px)] w-full sm:w-[calc(100%_-_40px)] p-2 overflow-y-auto text-sm">
            <SyntaxHighlighter
              language="typescript"
              style={nightOwl}
              customStyle={{
                backgroundColor: "transparent",
                fontSize: "14px",
                fontFamily: "'Fira Code', monospace",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
                lineHeight: "1.5",
              }}
              showLineNumbers={false} // Hide line numbers for better mobile experience
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* BorderBeam Animation */}
        <BorderBeam size={250} duration={12} delay={9} />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-full z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 10%, var(--color)",
        }}
      />
    </section>
  );
};

export default Border;
