import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
