module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
    ["inline-dotenv"],
    ["react-native-paper/babel"],
  ],
}
