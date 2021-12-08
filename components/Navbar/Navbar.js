import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../../features/sidebar/sidebarSlice";

import { Button } from "../Button";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="z-10 flex items-center justify-end fixed w-full h-16">
        <div className="container w-10/12 mx-auto flex items-center justify-end space-x-5">
          <Button download href="/docs/adegoke_temitope_cv.pdf">
            Résumé
          </Button>
          <img
            onClick={() => dispatch(openSidebar())}
            alt="menu"
            className="w-10 h-10 cursor-pointer"
            src="/images/ri_menu-4-fill.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
