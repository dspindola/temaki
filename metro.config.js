const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.resolver.sourceExts.push("mjs");
const { withTamagui } = require("@tamagui/metro-plugin");

module.exports = withTamagui(config, {
  components: ["tamagui", "react-native", "react-native-web"],
  config: "./tamagui.config.ts",
  outputCSS: "./.tamagui/web.css",
  disableExtraction: process.env.NODE_ENV === "development",
  disableInitialBuild: true,
});
