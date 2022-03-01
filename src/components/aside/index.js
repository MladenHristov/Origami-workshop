import React from "react";
import Link from "../link";
import style from "./index.module.css";
import getNavigation from "../../utils/navigation";

const Aside = () => {
  const links = getNavigation();

  return (
    <aside className={style.aside}>
      {links.map((nav) => {
        return <Link href={nav.link} title={nav.title} type="aside" />;
      })}
    </aside>
  );
};

export default Aside;
