import React from "react";

import classes from "../../../components/Assets/GridItem/GridItem.module.css";
import { Item } from "./AssetSketetonPlaceholder";

const SearchSkeletonLoader = () => {
  return (
    <div className="grid-container">
      {[...Array(25).keys()].map((el, i) => (
        <div className={classes.container} key={el.toString()}>
          <Item />
        </div>
      ))}
    </div>
  );
};
export default SearchSkeletonLoader;
