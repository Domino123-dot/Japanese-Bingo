import React from "react";
import Footer from "../footer/footer";
import ScrollOnTop from "../ScrollOnTop/ScrollOnTop";
import LanguageSelect from "../select/select";

export default function Layout({ children }) {
  return (
    <>
      <LanguageSelect text="Language" />

      <main>{children}</main>

      <Footer />
      <ScrollOnTop />
    </>
  );
}
