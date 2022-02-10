/* eslint-disable @typescript-eslint/no-explicit-any */
import CompressionPlugin from "compression-webpack-plugin";

module.exports = {
  chainWebpack: (config: any) => {
    config.plugins.delete("prefetch");
    config.plugin("CompressionPlugin").use(CompressionPlugin);

    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
