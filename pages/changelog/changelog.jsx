import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import styles from "./changelog.module.scss";
import axios from "axios";
import Line from "../../components/line";
import Layout from "../../components/layout/layout.js";
import Backbutton from "../../components/backButton/Backbutton.js";
const changelog = () => {
  const [changelog, setChangelog] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/changelog/").then((response) => {
      setChangelog(response.data);
    });
  }, []);

  return (
    <>
    <Backbutton/>
    <Layout>
     <Header title="Changelog">What's new?</Header>
      <div className={styles.flex}>
       

        {changelog.map((changelogs) => {
          return (
            <div key={changelogs.ID}>
              <div className={styles.title}>{changelogs.title} </div>
              <div className={changelogs.isNew ? styles.new : styles.newDsp}>
                New!
              </div>
              <div className={styles.desc}>{changelogs.info} </div>
                <br/>
               <div className={styles.timestamp}> {changelogs.timestamp} </div>
              <Line color="#241f1f" margin="0 40% 0 40%" />
            <br/>
            </div>
          );
        })}
      </div>
      </Layout>
    </>
  );
};

export default changelog;
