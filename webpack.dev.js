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
    static: path.resolve(__dirname, "public"), // Serve static files
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: "all",
    historyApiFallback: true, // Fixes React Router issues
    hot: true,
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws" // Fixes WebSocket live reload
    }
  }
  
});
