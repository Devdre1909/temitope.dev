"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import styles from "./work.module.scss";
import clx from "classnames";

const Work = ({ work }) => {
  const workEl = useRef(null);

  // useEffect(() => {
  //   workEl.current.addEventListener("mouseenter", (e) => {
  //     const otherWorkEl = Array.from(
  //       document.getElementsByClassName(styles["work__list-work"])
  //     ).filter((el) => el != e.target);
  //     e.target.classList.add(styles["work__list-work--scaleUp"]);
  //     otherWorkEl.forEach((el) =>
  //       el.classList.add(styles["work__list-work--scaleDown"])
  //     );
  //   });

  //   workEl.current.addEventListener("mouseleave", (e) => {
  //     const otherWorkEl = Array.from(
  //       document.getElementsByClassName(styles["work__list-work"])
  //     ).filter((el) => el != e.target);
  //     e.target.classList.remove(styles["work__list-work--scaleUp"]);
  //     otherWorkEl.forEach((el) =>
  //       el.classList.remove(styles["work__list-work--scaleDown"])
  //     );
  //   });

  // }, []);

  

  return (
    <div
      ref={workEl}
      className={clx(
        styles["work__list-work"]
        // styles["work__list-work--scaleUp"]
      )}
    >
      <div className={styles["work__list-work__image"]}>
        <Image src={work.image} alt={work.title} />
      </div>
      <div className={styles["work__list-work__content"]}>
        <div>
          <div className={styles["work__list-work__content__stack"]}>
            {work.tools.join(" • ")}
          </div>
          <h3 className={styles["work__list-work__content__title"]}>
            {work.title}
          </h3>
          <div className={styles["work__list-work__content__info"]}>
            {work.description}
          </div>
        </div>
        <div className={styles["work__list-work__content__links"]}>
          <a
            target="_blank"
            href={work.link}
            className={styles["work__list-work__content__link"]}
          >
            <FiExternalLink className="text-light-300 w-4 h-4" /> View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
