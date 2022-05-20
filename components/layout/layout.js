import React from "react";
import Footer from "../footer/footer";
import Line from "../line";
import LanguageSelect from "../select/select";

export default function Layout({ children }) {
  return (
    <>
    <LanguageSelect text="Language" />
      <main>{children}</main>
      <Line />
      <Footer />
    </>
  );
}
