import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./AntdRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "广告上报",
  // description: "Generated by create next app",
};

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <div className="acss-trkbkn">{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
