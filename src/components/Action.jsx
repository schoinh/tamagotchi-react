import React from "react";
import PropTypes from "prop-types";
import Feed from "./Feed";
import Clean from "./Clean";
import Pat from "./Pat";

const Action = () => {
  return (
    <div>
      <Clean />
      <Feed />
      <Pat />
    </div>
  );
};

export default Action;