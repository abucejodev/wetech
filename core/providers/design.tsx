"use client";

import { NextUIProvider } from "@nextui-org/react";

type Props = { children: React.ReactNode };

const DesignProvider = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default DesignProvider;
