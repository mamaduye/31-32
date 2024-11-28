module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Tetap gunakan preset Expo
    plugins: ['react-native-reanimated/plugin'], // Tambahkan plugin ini
  };
};

