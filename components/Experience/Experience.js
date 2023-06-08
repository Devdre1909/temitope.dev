"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./experience.module.scss";
import clx from "classnames";

const Experience = ({ ex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const experienceContentEl = useRef(null);
  const experienceEl = useRef(null);

  useEffect(() => {
    setScrollHeight(experienceContentEl.current?.scrollHeight);
  }, []);

  useEffect(() => {
    experienceEl.current.addEventListener("mouseenter", handleMouseEnter);
    experienceEl.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      removeEventListener("mouseenter", handleMouseEnter);
      removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleMouseLeave = (event) => {
    const otherExperienceEl = Array.from(
      document.getElementsByClassName(styles.experience)
    ).filter((el) => el !== event.target);
    otherExperienceEl.forEach((el) => {
      el.classList.remove(styles["experience--fadeOut"]);
    });
  };

  const handleMouseEnter = (event) => {
    const otherExperienceEl = Array.from(
      document.getElementsByClassName(styles.experience)
    ).filter((el) => el !== event.target);
    otherExperienceEl.forEach((el) => {
      el.classList.add(styles["experience--fadeOut"]);
    });
  };

  return (
    <div
      ref={experienceEl}
      className={clx(styles.experience, `${scrollHeight}-height`)}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <h3 className={styles.experience__title}>
        {ex.role}{" "}
        <a target="_blank" href={ex.link}>
          @ {ex.company}
        </a>
      </h3>
      <div className="flex items-center justify-between">
        <p className={styles.experience__time}>{ex.timeline}</p>
        <p className="text-xs cursor-pointer text-light-700">
          {!isOpen ? "Click to expand" : "Click to close"}
        </p>
      </div>
      <div
        ref={experienceContentEl}
        className={clx(
          styles.experience__collapsable,
          isOpen && styles["experience__collapsable--open"]
        )}
        style={{
          height: isOpen ? `${scrollHeight}px` : "0",
        }}
      >
        <ul className={styles.experience__content}>
          {ex.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <div className={styles.experience__techs}>
          {ex.techs.split(",").map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
