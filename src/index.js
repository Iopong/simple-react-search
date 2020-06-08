import React from "react";
import ReactDOM from "react-dom";

import { Main } from "./App";
// import

const items = [
  {
    id: 1,
    name: "tool1"
  },
  {
    id: 2,
    name: "tool2"
  },
  {
    id: 3,
    name: "tool3"
  },
  {
    id: 4,
    name: "tool4"
  },
  {
    id: 5,
    name: "test_1_2_3"
  },
  {
    id: 6,
    name: "SOMETHINAB_you"
  },
  {
    id: 7,
    name: "hwyOPMN"
  },
  {
    id: 8,
    name: "do you TestMe"
  },
  {
    id: 9,
    name: "runaway-with-me"
  },
  {
    id: 10,
    name: "tool2_something"
  },
  {
    id: 11,
    name: "m0 rn-1 me"
  },
  {
    id: 12,
    name: "tool4-.me"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Main items={items} />
  </React.StrictMode>,
  rootElement
);
