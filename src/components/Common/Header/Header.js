import Link from "next/link";
import React from "react";

import classes from "./Header.module.css";

const Header = ({ title, viewAll, viewAllLink }) => {
  return (
    <div className={`${classes.container}  `}>
      <div className={`${classes.title} font-600`}>{title}</div>
      {viewAll && (
        <div className="font-300">
          <Link href={viewAllLink}>View All</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
