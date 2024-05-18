import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./provider";


export const metadata: Metadata = {
  title: "AleemCodes",
  description: "Portfolio website of Aleem Shah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vt323-regular">
        <Navbar/>
       <MobileNavbar/>
       
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
       <Footer/> 
      </body>
    </html>
  );
}
