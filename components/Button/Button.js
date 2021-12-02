import React from "react";
import style from "./styles.module.css"

const Button = ({ children, ...props }) => {
  return <a {...props} className={style.btn}>{children}</a>;
};

export default Button;
