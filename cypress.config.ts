import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    viewportHeight: 700,
    viewportWidth: 1000,
  },
});
