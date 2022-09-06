import React from "react";
import Router from "next/router";
import { useState } from "react/cjs/react.production.min";

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
