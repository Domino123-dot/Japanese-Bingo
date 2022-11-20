import React from "react";
import Footer from "../footer/footer";
import ScrollOnTop from "../ScrollOnTop/ScrollOnTop";
export default function Layout({ children }) {
  return (
    <>
      <title>Japanese Kana Quiz</title>
      <main>{children}</main>

      <Footer />
      <ScrollOnTop />
    </>
  );
}
