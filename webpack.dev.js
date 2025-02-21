// /* eslint-disable import/no-extraneous-dependencies */
// const path = require("path");
// const { merge } = require("webpack-merge");
// const common = require("./webpack.common");

// module.exports = merge(common, {
//   mode: "development",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle-dev.js",
//   },
// });
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-dev.js",
  },
  devServer: {
    host: "0.0.0.0", // Allow access from any network
    port: 8080, // Change if needed
    allowedHosts: "all", // Fixes "Invalid Host header" error
    historyApiFallback: true, // Fixes issues with React Router (if used)
    hot: true, // Enables Hot Module Replacement
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws" // Fix WebSocket live reload issues
    }
  }
});
