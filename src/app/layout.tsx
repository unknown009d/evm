import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Management System",
  description: "A Paperless Solution for Events Management",
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
          disableTransitionOnChange
        >
          <div className="container mt-10 max-w-[500px]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
