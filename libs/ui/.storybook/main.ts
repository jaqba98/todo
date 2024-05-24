import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  staticDirs: [
    "../../../apps/todo/src/"
  ],
  stories: ["../**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@playwright/test"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
