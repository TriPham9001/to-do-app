"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Provider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ThemeProvider>
  );
}
