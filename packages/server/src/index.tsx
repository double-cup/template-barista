import React from "react";
import ReactDOM from "react-dom";
import { App } from "@template-barista/application";
import { Reset } from "styled-reset";
import { StyledGlobal } from "./components/styles/global.styled";

ReactDOM.render(
  <React.Fragment>
    <Reset />
    <StyledGlobal />
    <App />
  </React.Fragment>,
  document.getElementById("design-system")
);
