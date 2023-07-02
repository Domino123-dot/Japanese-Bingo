import React from "react";
import Footer from "../footer/footer";
import ScrollOnTop from "../ScrollOnTop/ScrollOnTop";
import { Helmet } from "react-helmet";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
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
        <meta
          name="keywords"
          content="japanese , katakana , hiragana , quiz , japanese quiz , 
          japanese hiragana quiz , katakana quiz , hiragana quiz , japanese katakana quiz"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        
      </Helmet>
      <main>{children}</main>

      <Footer />
      <ScrollOnTop />
    </>
  );
}
