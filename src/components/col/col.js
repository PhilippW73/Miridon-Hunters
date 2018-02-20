import React from "react";

const col = props => {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  return <div className={size} {...props} />;
};

export default col;
