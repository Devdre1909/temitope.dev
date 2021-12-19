import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";

import S from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="h-16 fixed w-full shadow-md bg-brand-dark-body z-10">
      <div className="spacing h-full">
        <div className="flex w-full h-full items-center justify-between">
          <div>
            <a className={S.brand}>DEVTEMITOPE</a>
          </div>
          <ul className="hidden md:flex center h-full">
            <li className="h-full">
              <a className={S.link}>Base</a>
            </li>
            <li className="h-full">
              <a className={S.link}>About</a>
            </li>
            <li className="h-full">
              <a className={S.link}>Projects</a>
            </li>
            <li className="h-full">
              <a className={S.link}>Work History</a>
            </li>
            <li className="h-full">
              <a className={S.link}>Contact</a>
            </li>
            <li className="h-full flex center mx-3">
              <a className="bg-brand-primary text-brand-blue-dark px-4 font-semibold py-2 rounded">
                Resume
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <CgMenuRightAlt className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
