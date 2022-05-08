import React from "react";
import Footer from "../footer/footer";
import Line from "../line";

export default function Layout({children}){
return(
   <>
    <main>{children}</main>
    <Line />
<Footer />
</>
)
}