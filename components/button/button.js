import React from "react";
import Router from "next/router";

const Button = ({ children, href, style }) => {
  return (
    <button type="button" onClick={() => Router.push(href)} className={style}>
      {" "}
      {children}
    </button>
  );    
};
export default Button;
