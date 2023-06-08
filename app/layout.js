import Script from "next/script";
// import { Partytown } from "@builder.io/partytown/react";

import "@/styles/globals.css";
import "@/styles/index.scss";

export const metadata = {
  title: "Adegoke Temitope | Software Engineer | AKure, Nigeria",
  description:
    "Adegoke Temitope is a Software Engineer based in Akure, Nigeria. He is passionate about building scalable and maintainable software.",
  favicon: "./favicon.ico",
  icon: "../public/favicon-32x32.png",
  "apple-icon": "../public/apple-touch-icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Partytown debug={true} forward={["dataLayer.push"]} /> */}
      <Script src="/js/clarity.js" async />
      <body>{children}</body>
    </html>
  );
}
