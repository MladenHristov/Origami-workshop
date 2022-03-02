import React from "react";
import LinkComponent from "../link";
import style from "./index.module.css";
import getNavigation from "../../utils/navigation";

const Aside = () => {
  const links = getNavigation();

  return (
    <aside className={style.aside}>
      {links.map((nav, index) => {
        return <LinkComponent href={nav.link} title={nav.title} type="aside" key={'a'+index} />;
      })}
    </aside>
  );
};

export default Aside;
