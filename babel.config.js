// This will remove consloe logs in prodcution
module.exports = (api) => {
  api.cache(true); // necessary
  if (
    process.env.NODE_ENV === "production" ||
    process.env.BABEL_ENV === "production"
  ) {
    return {
      presets: ["module:metro-react-native-babel-preset"],
      plugins: ["transform-remove-console"],
    };
  } else {
    return {
      presets: ["module:metro-react-native-babel-preset"],
    };
  }
};
