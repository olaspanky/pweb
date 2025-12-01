import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import "./globals.css";
import localFont from "next/font/local";

const isidoraSans = localFont({
  src: [
    {
      path: "../../public/fonts/IsidoraSans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IsidoraSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IsidoraSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IsidoraSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-isidoraSans",
  display: "swap",
});

export const metadata = {
  title: "PBR Life Sciences",
  description: "A Life Sciences Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${isidoraSans.variable} scroll-smooth`}>
      <body className="">{children}</body>
    </html>
  );
}
