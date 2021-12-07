import React from "react";
import styled from './styles.module.css';

const Button = ({ children, ...props }) => {
  return <a {...props} className={styled.styledBtn}>{children}</a>;
};

export default Button;
