import React from "react";

export const New = (props) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">НОВОЕ</span>
      {props.children}
    </div>
  );
};
