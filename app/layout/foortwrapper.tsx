"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";


export default function FooterWrapper() {
  const pathname = usePathname();
  const hideFooter = ["/cart", "/checkout"].includes(pathname);

  return !hideFooter ? <Footer /> : null;
}
