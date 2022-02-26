import React from "react";
import styles from "./index.module.css";
import logo from "../images/blue-origami-bird.png";

const Origami = ({ description, author }) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt='some value'></img>
      <p className={styles.description}>{description}</p>
      <div>
        <small>Author:</small>
        <span className={styles.user}>{author}</span>
      </div>
    </div>
  );
};

export default Origami;
