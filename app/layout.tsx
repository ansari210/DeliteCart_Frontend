"use client"
// import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/header";
;
import { SessionProvider } from "next-auth/react"
import FooterWrapper from "./layout/foortwrapper";

// export const metadata: Metadata = {
//   title: "DelightCart",
//   description: "Your store, your delight",
 
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
   
      <body
       
      > 
      <SessionProvider>
        <Header/>
        {children}
      <FooterWrapper/>
      </SessionProvider>
      </body>
     
    </html>
  );
}
