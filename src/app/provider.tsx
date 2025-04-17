"use client";

import { HeroUIProvider } from "@heroui/react";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
