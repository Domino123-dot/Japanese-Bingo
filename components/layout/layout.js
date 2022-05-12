import React from "react";
import Footer from "../footer/footer";
import Line from "../line";
import Select from "../select/select";

export default function Layout({ children }) {
  return (
    <>
    <Select />
      <main>{children}</main>
      <Line />
      <Footer />
    </>
  );
}
