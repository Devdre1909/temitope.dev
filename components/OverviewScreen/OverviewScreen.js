import React, { useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { ButtonStyled } from "../Button";
import styles from "./style.module.css";
import Modal from "../Modal/Modal";
import { Input } from "../Input";

const OverviewScreen = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <Modal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      >
        <div>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <Input placeholder="Name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" />
            </div>
            <ButtonStyled>Send</ButtonStyled>
          </form>
        </div>
      </Modal>
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
          <p className="text-brand-orange text-sm font-medium mb-4">
            Hello, my name is
          </p>
          <h2 className="text-white md:text-4xl text-3xl font-semibold mb-3">
            Adegoke Temitope{" "}
          </h2>
          <h1 className="text-brand-orange md:text-4xl text-3xl font-semibold mb-2">
            I Build and Design for the Web{" "}
          </h1>
          <p className="text-white mt-8 leading-[23px] md:text-lg text-sm md:w-8/12">
            I’m a self-taught full stack software developer who prides in
            building user-centered, scalable and accessible quality products,
            with demonstrated history of working with programming languages,
            frameworks and libraries including React, Vue, Next, Node, Express,
            MongoDB, MySQL, and more.
            {/* Presently,
            Leading Frontend at{" "}
            <a href="https://www.mymatacare.com/" target="_blank" className="hover:underline text-brand-orange cursor-pointer">
              MataCare
            </a> */}
          </p>
          <div className="flex mt-10 justify-center md:justify-start">
            <ButtonStyled>
              Contact Me
            </ButtonStyled>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
