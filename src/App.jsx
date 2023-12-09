import React, { useState } from "react";
import items from "./components/items.json";
import { List } from "./components/List";

import "./App.css";

export const App = () => {
  const [list, setList] = useState(items);

  return <List list={list} />;
};
