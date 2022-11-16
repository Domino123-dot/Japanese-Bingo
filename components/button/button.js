import React from "react";
import Router from "next/router";

const Button = ({ children, href, style, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      onClick={() => Router.push(href)}
      className={style}
    >
      {" "}
      {children}
    </button>
  );
};
export default Button;
