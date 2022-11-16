import React from "react";
import Footer from "../footer/footer";
import ScrollOnTop from "../ScrollOnTop/ScrollOnTop";
export default function Layout({ children }) {
  return (
    <>
    
      <main>{children}</main>

      <Footer />
      <ScrollOnTop />
    </>
  );
}
