import React from "react";
import styles from "./index.module.css";
import Link from "../link";
import logo from "../images/blue-origami-bird-flipped.png";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <Link href="#" title="Going to 1" type="footer" />
        <Link href="#" title="Going to 2" type="footer" />
        <Link href="#" title="Going to 3" type="footer" />
        <Link href="#" title="Going to 4" type="footer" />
        <Link href="#" title="Going to 5" type="footer" />
        <Link href="#" title="Going to 6" type="footer" />
        <Link href="#" title="Going to 7" type="footer" />
        <Link href="#" title="Going to 8" type="footer" />
        <Link href="#" title="Going to 9" type="footer" />
        <Link href="#" title="Going to 10" type="footer" />
        <Link href="#" title="Going to 11" type="footer" />
        <img className={styles.logo} src={logo} alt="some value" />
      </div>

      <p className={styles.university}>Software University 2019</p>
    </footer>
  );
};

export default Footer;
