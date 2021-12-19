import React, { useState, useEffect } from "react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import Image from "next/image";

import { Navbar } from "../components/Navbar";
import TeamCollaborationImage from "../assets/images/undraw_team_collaboration_re_ow29.svg";
import BuildWebsiteImage from "../assets/images/undraw_building_websites_i78t.svg";
import ResponsiveDesignImage from "../assets/images/undraw_responsive_re_e1nn.svg";
import { projects } from "../data/project";

const imageList = [
  TeamCollaborationImage,
  BuildWebsiteImage,
  ResponsiveDesignImage,
];

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex) => (imageIndex + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-brand-dark-body selection:bg-brand-primary selection:text-brand-dark-body">
        <Navbar />

        <div className="md:h-screen w-full py-16">
          <div className="spacing h-full md:flex">
            <nav className="h-full md:flex hidden justify-center items-center fixed left-10">
              <div class="space-y-8">
                <a
                  href="#base"
                  data-title="Base"
                  class="nav-dot selected-circle"
                ></a>
                <a href="#about" data-title="About" class="nav-dot"></a>
                <a href="#projects" data-title="projects" class="nav-dot"></a>
                <a
                  href="#work-history"
                  data-title="Work History"
                  class="nav-dot"
                ></a>
                <a href="#contact" data-title="Contact" class="nav-dot"></a>
              </div>
            </nav>
            <div class="flex h-full center w-8/12">
              <div>
                <h1 class="text-white font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left mt-5">
                  Building user centered, scalable, and accessible web apps
                </h1>
                <div class="w-full flex justify-center md:justify-start mt-12">
                  <button class="rounded px-8 py-4 hover:bg-brand-primary hover:text-brand-dark-body transition-colors saturate-200 border-2 border-brand-primary text-brand-primary font-bold flex items-center space-x-3">
                    <BsEmojiHeartEyes className="w-5 h-5" />
                    <span>View my works.</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-4/12 flex h-full center transition duration-200 fadeIn">
              <Image width="" src={imageList[imageIndex]} className="" />
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="spacing relative">
            <div className="relative">
              <p className="section-big-title">About</p>
              <h2 id="work" class="secondary-title">
                In the past years ...
              </h2>
              <p class="section-paragraph">A few things about me</p>
            </div>
            <div className="text-[#EFEFEF] md:mt-10 mt-7 font-medium text-lg space-y-6">
              <p className="font-medium md:text-lg text-base">
                Hi!. I'm Temitope, and Engineering and Tech just fascinates me.
                My interest in programming started out around 2016, when I had
                my first interaction with an android smartphone and most of the
                games I tried out just didn't seem interesting enough, so I
                decided to find out how games are created.
              </p>
              <p>
                Moving on to the present day, I have been privileged to work
                with a an{" "}
                <a
                  href="https://www.edulightconsulting.com.ng/"
                  className="text-brand-primary hover:underline cursor-pointer"
                >
                  IT consultancy agency
                </a>
                , where I gained most of my experience in teaching, leadership,
                communication, management and engineering, also had my input,
                ideas in startups like MyExtraSheet, {""}
                <a href="https://campusdash.com.ng/" className="styled-link">
                  CampusDash
                </a>
                ,{" "}
                <a
                  href="https://www.mymatacare.com/"
                  target="_black"
                  className="styled-link"
                >
                  MataCare
                </a>{" "}
                as a Frontend Lead/Developer.
              </p>
              <p>
                I've built product that solve real-life problems and help
                business automate processes with focus on user experience, fast
                delivery and high quality using advanced web technologies, and
                like some of my clients world say "
                <i>Damilare builds pixel perfect apps</i>". following the UI
                design to detail.
              </p>
              <p>
                Recently, because of my lead roles I have been focusing more on
                Front End Engineering and working better with both the UI/UX
                Designer and the Backend Engineers.
              </p>
              <p className="italic text-brand-primary">
                I am also open for remote or contract work.
              </p>
            </div>
          </div>
          <div className="container px-5 mx-auto fixed bottom-[-10px] w-full z-0">
            <div className="md:text-5xl text-xl font-bold text-[#EFEFEF] text-opacity-25 flex justify-end space-x-8 w-full">
              <p>Design</p>
              <p>Engineering</p>
              <p>Learning</p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="spacing relative">
            <div className="relative">
              <p className="section-big-title">Projects</p>
              <h2 id="work" class="secondary-title">
                Some things I have Built
              </h2>
              <p class="section-paragraph">
                Some of my resent works and personal projects
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <>
                  <a
                    key={i}
                    href={project.link}
                    target="_blank"
                    className="group block hover:border hover:shadow-md hover:grayscale-0 grayscale filter border-brand-primary h-64 overflow-hidden relative"
                  >
                    <div className="relative">
                      <img src={project.image} alt={project.imageAlt} />
                    </div>
                    <div className="group-hover:max-h-full max-h-0 overflow-hidden transition-all duration-200 absolute bottom-0 bg-brand-dark-body w-full">
                      <div className="p-5">
                        <h4 className="text-white font-semibold text-xl">
                          <a target="_blank" href={project.link}>
                            {project.name}
                          </a>
                        </h4>
                        <p>{project.description}</p>
                        <div className="flex mt-5 flex-wrap">
                          {project.stack.map((tag, i) => (
                            <>
                              <span
                                className="text-brand-primary mr-2 text-sm capitalize"
                                key={tag}
                              >
                                {tag} {i !== project.stack.length - 1 && "|"}{" "}
                              </span>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </>
              ))}

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
