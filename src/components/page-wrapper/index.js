import React from "react";
import styles from "./index.module.css";
import Header from "../header";
import Aside from "../aside";
import Footer from "../footer";

const PageWrapper = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles.container2}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
