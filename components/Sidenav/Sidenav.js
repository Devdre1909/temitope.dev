import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import s from "./sidenav.module.css";
import { closeSidebar } from "../../features/sidebar/sidebarSlice";

const Sidenav = () => {

  const sideBarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div className={`${s.wrapper} ${sideBarOpen ? s["open"] : ""}`}>
      <div className="w-full flex items-center justify-end mb-4">
        <AiOutlineClose onClick={()=>dispatch(closeSidebar())} className="text-white text-5xl cursor-pointer" />
      </div>
      <div>
        <Link href="/">
          <p className={s.links}>Base</p>
        </Link>
        <Link href="/me">
          <p className={s.links}>About</p>
        </Link>
        <p className={s.links}>Articles</p>
        <Link href="/projects">
          <p className={s.links}>Project</p>
        </Link>
        <p className={s.links}>Contact</p>
      </div>
      <div className="hidden md:block">
        <p className="text-brand-light font-light text-2xl text-center">
          adegoketemitope1909@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Sidenav;
