import React from "react";

export const Video = (props) => {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={props.id}
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
};
