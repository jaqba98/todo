import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../../../libs/control/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../libs/form/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../libs/view/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../libs/page/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  staticDirs: [
    "../../todo/src"
  ]
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
