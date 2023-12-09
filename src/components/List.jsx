import React from "react";
import { Video } from "./Video";
import { Article } from "./Article";
import { Wrapper } from "./Wrapper";

const WrapperVideo = Wrapper(Video);
const WrapperArticle = Wrapper(Article);

export const List = (props) => {
  return props.list.map((item, index) => {
    switch (item.type) {
      case "video":
        return <WrapperVideo key={index} {...item} />;

      case "article":
        return <WrapperArticle key={index} {...item} />;
      default:
        return <></>;
    }
  });
};
