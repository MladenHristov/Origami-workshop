import React from "react";
import styles from "./index.module.css";

const Origam = ({ description, author }) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{description}</p>
      <div>
        <small>Author:</small>
        <span className={styles.user}>{author}</span>
      </div>
    </div>
  );
};

export default Origam;