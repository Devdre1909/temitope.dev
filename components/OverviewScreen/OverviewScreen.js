import React, { useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { ButtonStyled } from "../Button";
import s from "./style.module.css";
import Modal from "../Modal/Modal";
import { Input } from "../Input";

const OverviewScreen = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.social}>
          <div>
            <img className="rounded-full w-10" src="/images/face-smile-big.jpeg" />
          </div>
          <div className={s["social-list"]}>
            <a
              target="_blank"
              className={s.icon}
              href="https://github.com/Devdre1909"
            >
              <AiFillGithub />
            </a>
            <a
              target="_blank"
              className={s.icon}
              href="https://www.linkedin.com/in/dtemitope/"
            >
              <AiFillLinkedin />
            </a>
            <a
              target="_blank"
              className={s.icon}
              href="mailto:adegoketemitope1909@gmail.com"
            >
              <AiFillMail />
            </a>
            <a
              target="_blank"
              className={s.icon}
              href="https://www.twitter.com/temitope_dev"
            >
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
        <div className={s.info}>
          <div className="w-10/12 mx-auto container md:text-left">
            <p className="text-brand-orange text-sm font-medium mb-4">
              Hello, my name is
            </p>
            <h2 className="text-white text-4xl font-semibold mb-3">
              Adegoke Temitope{" "}
            </h2>
            <h1 className="text-brand-orange text-4xl font-semibold mb-2 ">
              I Build and Design for the Web{" "}
            </h1>
            <p className="text-white mt-8 leading-[23px] text-lg md:w-8/12">
              I like to build solid and scalable web frontend products with
              great user experiences and developer experience.
            </p>
            <div className="flex mt-10 justify-start">
              <ButtonStyled className="md:text-left md:w-auto text-center w-full">Contact Me</ButtonStyled>
            </div>
          </div>
        </div>
        <div className={s.sprites}></div>
      </div>
    </div>
  );
};

export default OverviewScreen;
