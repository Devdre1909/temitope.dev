import React from "react";
import styled from './styles.module.css';

const Button = ({ children, ...props }) => {
  return <a className={styled.styledBtn}>{children}</a>;
};

export default Button;
