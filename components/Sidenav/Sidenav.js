import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import s from "./sidenav.module.css";

const Sidenav = () => {
  return (
    <div className={s.wrapper}>
      <div className="w-full flex items-center justify-end mb-4">
        <AiOutlineClose className="text-white text-5xl" />
      </div>
      <div>
        <Link href="/">
          <p className={s.links}>Base</p>
        </Link>
        <Link href="/me">
          <p className={s.links}>About</p>
        </Link>
        <p className={s.links}>Articles</p>
        <p className={s.links}>Projects</p>
        <p className={s.links}>Contact</p>
      </div>
      <div className="">
        <p className="text-brand-light font-light text-2xl text-center">
          adegoketemitope1909@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Sidenav;
