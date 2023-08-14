"use client";

import React from "react";
import Image from "next/image";
import styles from "./minimalistic.module.scss";
import Experiences from "@/data/experiences.json";
import MeImage from "@/assets/images/me-smiling.jpg";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { HiDocument } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Experience from "@/components/Experience/Experience";
import { WORKS } from "@/data/works";
import Work from "../Work/Work";
import classNames from "classnames";
// import Masonry from "react-responsive-masonry";
import { motion } from "framer-motion";

const Minimalistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.leftSide}>
            <div className={styles.leftSide__header}>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={styles.leftSide__title}
              >
                Adegoke Temitope
              </motion.h1>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className={styles.leftSide__jobRole}
              >
                Software Engineer
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.0,
                }}
                className={styles.leftSide__desc}
              >
                I am a{" "}
                <span className={styles["leftSide__desc--highlight"]}>
                  Fullstack Developer with over 4 years of experience
                </span>{" "}
                in designing and developing software solutions, over the years I
                have successfully delivered{" "}
                <span className={styles["leftSide__desc--highlight"]}>
                  stable, interactive and accessible web applications
                </span>{" "}
                for various domains. I have a talent for{" "}
                <span className={styles["leftSide__desc--highlight"]}>
                  collaborating with both designers and engineers
                </span>{" "}
                to ensure an optimal web experience, while also building strong
                relationships with my team and stakeholders. I am{" "}
                <span className={styles["leftSide__desc--highlight"]}>
                  committed to problem-solving
                </span>{" "}
                and always look for the best solutions. Additionally, I am a{" "}
                <span className={styles["leftSide__desc--highlight"]}>
                  lifelong learner
                </span>
                , eager to expand my knowledge. Outside of work, I enjoy playing
                games, hanging out with friends.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.5,
                }}
                className={styles.skills}
              >
                <p className={styles.star}>✨</p>
                <p className="mb-1">
                  React, Vue, NuxtJS, NextJS, Typescript, Javascript, NodeJS,
                  MongoDB, Redux, Jest, TailwindCSS, Design System, React
                  Native, SCSS, Express, Jest, Charka UI, MySQL, PostgreSQL
                </p>
                <p>
                  Communication, Collaboration, Decision making, Management,
                  Design Thinking
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2,
              }}
              className={styles.leftSide__links}
            >
              <div className={styles.leftSide__link}>
                00 <span className={styles.leftSide__link__line}></span> Recent
              </div>
              <div className={styles.leftSide__link}>
                01 <span className={styles.leftSide__link__line}></span>{" "}
                Experience
              </div>
              <div className={styles.leftSide__link}>
                02 <span className={styles.leftSide__link__line}></span> Works
              </div>
              {/* <div className={styles.leftSide__link}>
                03 <span className={styles.leftSide__link__line}></span>{" "}
                Personal
              </div> */}
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.5,
              }}
              className={styles.leftSide__footer}
            >
              <div className={styles.leftSide__footer__imageWrapper}>
                <Image
                  src={MeImage}
                  alt="Adegoke Temitope"
                  width={100}
                  height={100}
                  className={styles.leftSide__footer_image}
                />
              </div>
              <div className={styles.leftSide__footer__links}>
                <a
                  href="https://www.linkedin.com/in/dtemitope/"
                  target="_blank"
                  className={styles.leftSide__footer__link}
                >
                  <AiFillLinkedin className="text-white w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Devdre1909"
                  target="_blank"
                  className={styles.leftSide__footer__link}
                >
                  <AiFillGithub className="text-white w-6 h-6" />
                  <span>Github</span>
                </a>
                <a
                  href="mailto:adegoketemitope1909@gmail.com"
                  target="_blank"
                  className={styles.leftSide__footer__link}
                >
                  <MdOutlineAlternateEmail className="text-white w-6 h-6" />
                  <span>Email</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1rSGPnZR-iseUdskzukjpou3AWpCsJxOFSfL4PLVLYa8/edit?usp=sharing"
                  target="_blank"
                  className={styles.leftSide__footer__link}
                >
                  <HiDocument className="text-white w-6 h-6" />
                  <span>Resume</span>
                </a>
              </div>
              <div className={styles.leftSide__credit}>
                <div>
                  View <span>credits</span> for Inspiration
                  <div className={styles.leftSide__credit__list}>
                    <p>
                      <a href="https://www.sarahdayan.dev/" target="_blank">
                        https://www.sarahdayan.dev/
                      </a>
                    </p>
                    <p>
                      <a href="https://dennissnellenberg.com/" target="_blank">
                        https://dennissnellenberg.com/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 3.5,
            }}
            className={styles.rightSide}
          >
            <p className={styles.information}>
              ✨ Presently open to freelance work. Contact me on{" "}
              <a href="mailto:adegoketemitope1909@gmail.com">
                adegoketemitope1909@gmail.com
              </a>
            </p>
            <h3 className={styles["rightSide__section-title"]}>LATEST POST</h3>
            <div className={styles.rightSide__lists}>
              <div className={styles.rightSide__list}>
                <h3 className={styles.rightSide__list__title}>
                  Beginner&apos;s Guide to *aaS (Uncle Bob&apos;s story on Cloud
                  Computing)
                </h3>
                <p className={styles.rightSide__list__desc}>
                  Bob&apos;s Journey: Exploring the World of the Different
                  &quot;*aaS&quot; Models in Cloud Computing
                </p>
                <p className={styles.rightSide__list__content}>
                  Meet Uncle Bob, a small business owner who is always looking
                  for ways to improve his business while keeping costs down. He
                  recently heard about cloud computing and considers if it could
                  be a solution for his business...
                </p>
                <div className={styles.rightSide__list__footer}>
                  <a
                    href="https://devtemitope.hashnode.dev/beginners-guide-to-aas-uncle-bobs-story-on-cloud-computing"
                    target="_blank"
                  >
                    <FiExternalLink className="text-light-500 w-6 h-6" />
                    <span>Read on Hashnode</span>
                  </a>
                </div>
              </div>
            </div>
            <h3 className={styles["rightSide__section-title"]}>Experience</h3>
            <div className={styles.rightSide__lists}>
              {Experiences.map((ex) => (
                <Experience key={ex.title} ex={ex} />
              ))}
            </div>
            <h3
              className={classNames(styles["rightSide__section-title"], "mb-4")}
            >
              WORKS
            </h3>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-2 gap-2">
              {WORKS.map((work) => (
                <Work key={work.image} work={work} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Minimalistic;
