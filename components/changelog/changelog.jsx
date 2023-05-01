import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import styles from "./changelog.module.scss";
import axios from "axios";
import Line from "../../components/line";


const changelog = () =>{

    const [questions , setQuestions] = useState([]);

    useEffect(() => {
       
        axios.get("http://localhost:8000/api/changelog/").then((response) => {
          setQuestions(response.data);

        });
      }, []);


return(
    <>
        <div className={styles.flex}>
        <Header  title="Changelog">
        What's new?
        </Header>

       {questions.map((changelogs)=>{
        return(
            <div
            key={changelogs.ID}>

            <div className={styles.title}><h1>{changelogs.title}</h1> </div>

            <div className={styles.desc}>{changelogs.info}  </div>
        
            <Line color="#241f1f" margin="1% 30% 0 30%" />
            </div>
        )
       })}



        </div>
    
    
    
    </>
)


}


export default changelog;