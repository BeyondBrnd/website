import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const cerebri = localFont({
  src: [
    {
      path: "./fonts/CerebriSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-cerebri",
});

export const metadata: Metadata = {
  title: "BeyondBrnd",
  description: "Build serious B2B growth",
  icons: {
    icon: "/beyondbrnd-logo-cropped.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cerebri.variable} antialiased selection:bg-[#00BF63]/30 selection:text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
