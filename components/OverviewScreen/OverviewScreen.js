import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from "react-icons/ai"

import { ButtonStyled } from "../Button";
import styles from "./style.module.css";

const OverviewScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles['social-list']}>
          <AiFillGithub className={styles.icon} />
          <AiFillLinkedin className={styles.icon} />
          <AiFillMail className={styles.icon} />
          <AiFillTwitterCircle className={styles.icon} />
        </div>
        <div>
          <p className="text-brand-orange text-sm font-medium mb-4">Hello, my name is</p>
          <h2 className="text-white md:text-4xl text-3xl font-semibold mb-3">Adegoke Temitope </h2>
          <h1 className="text-brand-orange md:text-4xl text-3xl font-semibold mb-2">I Build and Design for the Web </h1>
          <p className="text-white mt-8 leading-[23px] md:text-lg text-sm md:w-8/12">
            I’m a full stack software developer who prides himself in building
            and somethings designing frontend products which people love.
            Presently, building user-centered, accessible products at <a className="hover:underline text-brand-orange cursor-pointer">Future Academy Africa.</a>
          </p>
          <div className="flex mt-10 justify-center md:justify-start">
            <ButtonStyled>
              Hire Me
            </ButtonStyled>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
