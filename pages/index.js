import Head from "next/head";
import { Navbar } from "../components/Navbar";
import OverviewScreen from "../components/OverviewScreen/OverviewScreen";
import { Sidenav } from "../components/Sidenav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adegoke Temitope</title>

        {/* SEO content */}
        <meta
          name="description"
          content=" I’m a full stack software developer who prides himself in building
            and somethings designing frontend products which people love.
            Presently, building user-centered, accessible products at Future Academy Africa"
        />
        <meta
          name="keywords"
          content="Adegoke Temitope, Adegoke, Temitope, Temitope Adegoke, Temitope Adegoke Portfolio, Temitope Adegoke Portfolio, Software, Developer, Frontend, Engineer, Designer, UX, Temmy, React, self-taught Front-end developer"
        />
        <meta name="author" content="Adegoke Temitope" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="English" />

        <meta name="geo.placename" content="Akure, Nigeria" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.position" content="6.4528, 3.3958" />
        <meta name="ICBM" content="6.4528, 3.3958" />

        <meta name="theme-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Adegoke Temitope" />
        <meta name="apple-mobile-web-app-title" content="Adegoke Temitope" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@adegoke_temitope" />
        <meta name="twitter:creator" content="@adegoke_temitope" />
        <meta name="twitter:title" content="Adegoke Temitope" />
        <meta
          name="twitter:description"
          content="Adegoke Temitope's Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://adegoke.dev/images/adegoke.jpg"
        />
      </Head>

      <div>
        <OverviewScreen />
      </div>
    </>
  );
}
