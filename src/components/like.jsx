import React, { Component, useLayoutEffect } from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onLike}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
