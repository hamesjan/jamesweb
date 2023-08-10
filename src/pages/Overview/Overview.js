import { useState } from "react";
import classes from "./Overview.module.css";

const Overview = () => {
  return (
    <div className="display block">
      <div className={classes.outer_dv}>
        This is a <b>personal portfolio</b> for <b>James Han.</b>
        <br />
        <p>Below is an overview of my personal experience and interests.</p>
      </div>
    </div>
  );
};

export default Overview;
