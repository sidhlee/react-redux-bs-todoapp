import React from "react";
import { ReactComponent as Notebook } from "../../assets/notebook.svg";
import classes from "./index.module.css";

const Logo = () => (
  <div className={classes.Logo}>
    <Notebook />
  </div>
);

export default Logo;
