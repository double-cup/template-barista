import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { theme } from "@template-barista/theme";
import { StyledGlobal } from "./styles/global.styled";
import { Loading } from "./Loading";

const LazyApp = lazy(
  () => import("@template-barista/application/components/App")
);

export function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Reset />
        <StyledGlobal />
        <Suspense fallback={Loading}>
          <LazyApp />
        </Suspense>
      </ThemeProvider>
    </React.Fragment>
  );
}
