import React, { useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import gsap from "gsap";

import { ButtonStyled } from "../Button";
import styles from "./style.module.css";

const OverviewScreen = () => {
  const helloRef = React.createRef(null);
  const titleRef = React.useRef(null);
  const subtitleRef = React.useRef(null);
  const actionRef = React.useRef(null);
  const headingRef = React.useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(helloRef.current, {
      duration: 1,
      opacity: 0,
      y: 100,
    });
    tl.from(titleRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
    });
    tl.from(headingRef.current, { duration: 1, y: 100, opacity: 0 });
    tl.from(subtitleRef.current, { duration: 1, y: 100, opacity: 0 });
    tl.from(actionRef.current, { duration: 1, y: 100, opacity: 0 });
    tl.play();
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles["social-list"]}>
          <a target="_blank" href="https://github.com/Devdre1909">
            <AiFillGithub className={styles.icon} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/dtemitope/">
            <AiFillLinkedin className={styles.icon} />
          </a>
          <a target="_blank" href="mailto:adegoketemitope1909@gmail.com">
            <AiFillMail className={styles.icon} />
          </a>
          <a target="_blank" href="https://www.twitter.com/temitope_dev">
            <AiFillTwitterCircle className={styles.icon} />
          </a>
        </div>
        <div>
          <p
            ref={helloRef}
            className="text-brand-orange text-sm font-medium mb-4"
          >
            Hello, my name is
          </p>
          <h2
            ref={titleRef}
            className="text-white md:text-4xl text-3xl font-semibold mb-3"
          >
            Adegoke Temitope{" "}
          </h2>
          <h1
            ref={headingRef}
            className="text-brand-orange md:text-4xl text-3xl font-semibold mb-2"
          >
            I Build and Design for the Web{" "}
          </h1>
          <p
            ref={subtitleRef}
            className="text-white mt-8 leading-[23px] md:text-lg text-sm md:w-8/12"
          >
            I’m a self-taught full stack software developer who prides in
            building user-centered, scalable and accessible quality products,
            with demonstrated history of working with programming languages,
            frameworks and libraries including React, Vue, Next,
            Node, Express, MongoDB, MySQL, and more. 
            {/* Presently,
            Leading Frontend at{" "}
            <a href="https://www.mymatacare.com/" target="_blank" className="hover:underline text-brand-orange cursor-pointer">
              MataCare
            </a> */}
          </p>
          <div
            ref={actionRef}
            className="flex mt-10 justify-center md:justify-start"
          >
            <ButtonStyled>Contact Me</ButtonStyled>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
