import React from "react";
import styles from "./index.module.css";
import Link from "../link";
import logo from "../images/blue-origami-bird-flipped.png";
import getNavigation from "../../utils/navigation";

const Footer = () => {
  const links = getNavigation();

  return (
    <footer className={styles.container}>
      <div>
        {links.map((nav) => {
          return <Link href={nav.link} title={nav.title} type="footer" />;
        })}
        <img className={styles.logo} src={logo} alt="some value" />
      </div>

      <p className={styles.university}>Software University 2019</p>
    </footer>
  );
};

export default Footer;
