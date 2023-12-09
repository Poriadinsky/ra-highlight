import React from "react";

export const Popular = (props) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">ПОПУЛЯРНОЕ</span>
      {props.children}
    </div>
  );
};
