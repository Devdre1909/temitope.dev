import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";

import "@/styles/globals.css";
import "@/style/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adegoke Temitope - Software Engineer</title>
        <meta
          name="description"
          content="Adegoke Temitope is a software engineer based in Akure, Nigeria. He is passionate about building scalable and maintainable software."
        />
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script src="/js/clarity.js" type="text/partytown" async />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
