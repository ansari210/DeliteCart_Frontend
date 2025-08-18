// app/loading-provider.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./loader";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Whenever pathname changes, show loader briefly
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600); // adjust timing if needed
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
