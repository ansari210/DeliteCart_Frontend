"use client"
// import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/header";
;
import { SessionProvider } from "next-auth/react"
import FooterWrapper from "./layout/foortwrapper";
import Providers from "./providers";
import LoadingProvider from "./components/loader/loader-provider";

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
      <Providers>
      <SessionProvider>
        <LoadingProvider>
        <Header/>
        {children}
      <FooterWrapper/>
      </LoadingProvider>
      </SessionProvider>
      </Providers>
      </body>
     
    </html>
  );
}
