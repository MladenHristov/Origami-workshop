import React from "react";
import styles from "./index.module.css";

const Button = ({ title }) => {
  return <button className={styles.submit}>{title}</button>;
};

export default Button;
