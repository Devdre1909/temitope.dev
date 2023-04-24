import React from "react";
import Image from "next/image";
import styles from "./minimalistic.module.scss";

import MeImage from "@/assets/images/me-smiling.jpg";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { SiReadthedocs } from "react-icons/si";

const Minimalistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.leftSide}>
            <div className={styles.leftSide__header}>
              <h1 className={styles.leftSide__title}>Adegoke Temitope</h1>
              <h2 className={styles.leftSide__jobRole}>
                Full stack Engineer (FE Heavy)
              </h2>
              <p className={styles.leftSide__desc}>
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
              </p>
            </div>
            <div className={styles.leftSide__links}>
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
              <div className={styles.leftSide__link}>
                03 <span className={styles.leftSide__link__line}></span>{" "}
                Personal
              </div>
            </div>
            <div className={styles.leftSide__footer}>
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
                  <AiOutlineMail className="text-white w-6 h-6" />
                  <span>Email</span>
                </a>
                <a
                  href="mailto:adegoketemitope1909@gmail.com"
                  target="_blank"
                  className={styles.leftSide__footer__link}
                >
                  <SiReadthedocs className="text-white w-6 h-6" />
                  <span>Resume</span>
                </a>
              </div>
              <div className={styles.leftSide__credit}>
                View <span>credits</span> for Inspiration
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
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
              <div className={styles.rightSide__experience}>
                <h3 className={styles.rightSide__experience__title}>
                  Fullstack Engineer{" "}
                  <a href="https://futureacademy.africa">
                    @ Future Academy Africa
                  </a>
                </h3>
                <p className={styles.rightSide__experience__time}>
                  February 2021 - Present
                </p>
                <ul className={styles.rightSide__experience__content}>
                  <li>
                    Develop v2 and v3 of Future Academy Africa’s landing page,
                    which on v3 launch there was a 30% increase in time spent on
                    the page per session after 2 months
                  </li>
                  <li>
                    Thought a successful front-end development course, utilized
                    by over 500 learners, teaching them how to build modern web
                    applications with HTML, CSS, and Javascript
                  </li>
                  <li>
                    Developed an e-learning mobile application using React
                    Native available on iOS and Android providing learners with
                    a different learning experience.
                  </li>
                  <li>
                    Developed various products, including Future Academy
                    Africa’s platform that manages over 5,000 student
                    registrations, onboarding, and payments every 2-3 months.
                    Integrating Stripe and Flutterwave solutions to handle both
                    local and international payments.
                  </li>
                </ul>
                <div className={styles.rightSide__experience__techs}>
                  <span>React</span>
                  <span>Vite</span> <span>Next</span> <span>Nuxt</span>{" "}
                  <span>NodeJS</span> <span>Express</span> <span>MongoDB</span>{" "}
                  <span>Jest</span> <span>React Native</span> <span>Expo</span>{" "}
                  <span>Cypress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minimalistic;
