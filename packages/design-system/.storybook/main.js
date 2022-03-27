module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
  features: {
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  typescript: {
    reactDocgen: "react-docgen",
  },
  reactOptions: {
    fastRefresh: true,
  },
  core: {
    builder: "webpack5",
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
        "preset-react-jsx-transform", // Can name this anything, just an arbitrary alias to avoid duplicate presets'
      ],
    ],
  }),
};
