import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    viewportHeight: 700,
    viewportWidth: 1000,
  },

  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config);
    },
  },
});
