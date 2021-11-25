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
        <title>AdegokemTemitope</title>
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
              <div key={index} className="inline-block text-base mx-4 text-gray-500">
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
