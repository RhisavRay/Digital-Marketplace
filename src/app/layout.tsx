import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">

      {/*
      The default code given was as follows,

      <body className={inter.className}>{children}</body>

      This only has one classname attribute. But now we want to add other classes as well using tailwind.
      This is where we use a "cn()" helper function, which lets us apply multiple class groups to be applied
       */}

      <body
        className={cn(
          "relative h-full font-sans antialiased",
          inter.className
        )}>
          <main className="relative flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow flex-1">
              {children}
            </div>
          </main>
      </body>
      
    </html>
  );
}
