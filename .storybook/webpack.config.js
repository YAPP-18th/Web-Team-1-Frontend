const path = require("path");

module.exports = ({ config }) => {
  const fileLoaderRule = config.module.rules.find((rule) => rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;
  
  // 절대경로 적용
  config.resolve.alias = {
    ...config.resolve.alias,
    "@apis": path.resolve(__dirname, "../src", "apis"),
    "@common": path.resolve(__dirname, "../src", "common"),
    "@components": path.resolve(__dirname, "../src", "components"),
    "@hooks": path.resolve(__dirname, "../src", "hooks"),
    "@pages": path.resolve(__dirname, "../src", "pages"),
    "@static": path.resolve(__dirname, "../src", "static"),
    "@styles": path.resolve(__dirname, "../src", "styles"),
    "@reducers": path.resolve(__dirname, "../src", "reducers"),
    "@typings": path.resolve(__dirname, "../src", "typings"),
    "@utils": path.resolve(__dirname, "../src", "utils"),
  };

  // svg 적용
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
};
