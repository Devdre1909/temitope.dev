import Head from "next/head";

export default function Home() {
  const languages = [
    "JavaScript",
    "NodeJs",
    "C#",
    ".NET",
    ".NET Core",
    "ReactJS",
    "Redux",
    "VueJS",
    "Vuex",
    "TailwindCSS",
    "Material UI",
    "NextJS",
    "NuxtJS",
  ];

  return (
    <>
      <Head>
        <title>Adegoke Temitope</title>

        {/* SEO content */}
        <meta name="description" content="Adegoke Temitope's Portfolio" />
        <meta
          name="keywords"
          content="Adegoke Temitope, Adegoke, Temitope, Temitope Adegoke, Temitope Adegoke Portfolio, Temitope Adegoke Portfolio, Software, Developer, Frontend, Engineer, Designer, UX, Temmy, React"
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
      <div className="h-screen w-screen flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold container text-center">
            Adegoke Temitope
          </h1>
          <h4 className="text-2xl font-medium container text-center">
            Software Engineer
          </h4>
          <div className="mt-5 flex flex-wrap items-center justify-center container">
            {languages.map((language, index) => {
              return (
                <div
                  key={index}
                  className="inline-block text-base mx-4 text-gray-500"
                >
                  <span>#{language}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
