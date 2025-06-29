module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Required for expo-router
      // 'expo-router/babel' está desatualizado e é preferido usar "babel-preset-expo"
      // 'expo-router/babel',
      "react-native-reanimated/plugin"
    ],
  };
};
