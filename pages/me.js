import React from "react";
import { Sidenav } from "../components/Sidenav";

const Me = () => {
  return (
    <>
      <Sidenav />
      <div className="h-screen md:w-screen overflow-hidden">
        <div className="flex items-start justify-start h-full w-full relative">
          <div className="md:w-8/12 bg-brand-blue-darker h-full relative">
            <div className="h-[90%] container w-10/12 md:w-9/12 mx-auto py-10 overflow-y-scroll no-scrollbar">
              <h2 className="text-brand-orange text-2xl md:text-3xl font-medium">
                In the Last few years ...
              </h2>
              <div className="text-[#EFEFEF] md:mt-10 mt-7 font-medium text-lg space-y-6">
                <p className="font-medium md:text-lg text-base">
                  Hi!. I’m Temitope, and Engineering and Tech just fascinates
                  me. My interest in programming started out around 2016, when I
                  had my first interaction with an android smartphone and most
                  of the games I tried out just didn't seem interesting enough,
                  so I decided to find out how games are created.
                </p>
                <p>
                  Moving on to the present day, I have been privileged to work
                  with a an{" "}
                  <a className="text-brand-orange hover:underline cursor-pointer">
                    IT consultancy agency
                  </a>{" "}
                  , where I gained most of my experience in teaching,
                  leadership, communication, management and engineering, some
                  startups like MyExtraSheet,{" "}
                  <a className="text-brand-orange hover:underline cursor-pointer">
                    MataCare
                  </a>{" "}
                  as Frontend Lead.
                </p>
                <p>
                  I've built product that solve real-life problems and help
                  business automate processes with focus on user experience,
                  fast delivery and high quality using advanced web
                  technologies, and like some of my clients world say "
                  <i>Damilare builds pixel perfect apps</i>". following the UI
                  design to detail.
                </p>
                <p>
                  Recently, because of my lead roles I have been focusing more
                  on Front End Engineering and working better with both the
                  UI/UX Designer and the Backend Engineers.
                </p>
                <p className="italic text-brand-orange">
                  I am also open for remote or contract work.
                </p>
              </div>
            </div>
            <div className="container px-5 mx-auto absolute bottom-[-10px] w-full">
              <div className="md:text-5xl text-xl font-bold text-[#EFEFEF] flex justify-center space-x-8 w-full">
                <p>Design</p>
                <p>Engineering</p>
                <p>Learning</p>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 hidden md:block"></div>
        </div>
      </div>
    </>
  );
};

export default Me;
