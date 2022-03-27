import { Suspense } from "react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { colors } from "../src/config/theme";

const getColors = (key = "name", value = "value") =>
  Object.entries(colors)
    .filter(([name]) =>
      ["primary", "secondary", "complementary"].includes(name)
    )
    .reduce(
      (keys, [name, shades]) =>
        keys.concat(
          Object.entries(shades).map(([shade, color]) => ({
            [key]: `${name}.${shade}`,
            [value]: color,
          }))
        ),
      []
    );

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "complementary.black",
    values: getColors(),
    grid: {
      cellSize: 8,
      cellAmount: 8,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: getColors("title", "color"),
  },
  viewport: {
    viewports: {
      iPhone12mini: {
        name: "iPhone 12 mini",
        type: "mobile",
        styles: {
          width: "360px",
          height: "780px",
        },
      },
      iPhoneSE2: {
        name: "iPhone SE 2",
        type: "mobile",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      iPhone12: {
        name: "iPhone 12",
        type: "mobile",
        styles: {
          width: "390px",
          height: "844px",
        },
      },
      iPadMini: {
        name: "iPad mini",
        type: "tablet",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      iPad: {
        name: "iPad",
        type: "tablet",
        styles: {
          width: "810px",
          height: "1080px",
        },
      },
      iPadAir: {
        name: "iPad Air",
        type: "tablet",
        styles: {
          width: "820px",
          height: "1180px",
        },
      },
      iPadPro11: {
        name: "iPad Pro 11”",
        type: "tablet",
        styles: {
          width: "834px",
          height: "1194px",
        },
      },
      iPadPro12: {
        name: "iPad Pro 12.9”",
        type: "tablet",
        styles: {
          width: "1024px",
          height: "1366px",
        },
      },
    },
  },
  a11y: {
    disable: true,
  },
};

const defaultTheme = {
  name: "DEFAULT",
  colors: {
    main: "red",
    secondary: "blue",
  },
};

const darkTheme = {
  name: "DARK",
  colors: {
    main: "grey",
    secondary: "black",
  },
};

const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};

export const decorators = [
  withThemesProvider(getAllThemes(), ThemeProvider),
  (Story) => (
    <Suspense fallback="Loading…">
      <Story />
    </Suspense>
  ),
];
