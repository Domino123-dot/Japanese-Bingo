import React from "react";
import styles from "../select/select.module.scss";



const Select = () =>{
return(
<select className={styles.select} name="Choose language">
         
         <option value="PL">Polish</option>
         <option selected="selected" value="EN">
           English
         </option>
       </select>
   

)

}

export default Select;