import React from "react";
import Footer from "../footer/footer";
import ScrollOnTop from "../ScrollOnTop/ScrollOnTop";
import { Helmet } from "react-helmet";
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#b5b19e" />
        <html lang="en" />
        <title>Japanese Quiz!</title>
        <meta
          name="description"
          content="Test your basic kana knowlege on my website,
           new features coming soon!
           Feel free to leave a feedback what should we add next <3"
        />
      </Helmet>
      <main>{children}</main>

      <Footer />
      <ScrollOnTop />
    </>
  );
}
