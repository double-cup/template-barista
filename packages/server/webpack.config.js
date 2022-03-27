const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  mode: "development",
  entry: resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "[contenthash].bundle.js",
    chunkFilename: "[contenthash].bundle.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "swc-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "assets", "html", "generated.html"),
      inject: "body",
      minify: true,
      xhtml: true,
    }),
  ],
  watchOptions: {
    followSymlinks: true,
    stdin: true,
  },
  resolve: {
    alias: {
      "@template-barista/application": resolve(
        __dirname,
        "..",
        "application",
        "src"
      ),
      "@template-barista/design-system": resolve(
        __dirname,
        "..",
        "design-system",
        "src"
      ),
      "@template-barista/server": resolve(__dirname, "..", "server", "src"),
      "@template-barista/theme": resolve(__dirname, "..", "theme", "src"),
    },
    extensions: [".ts", ".js"],
  },
};

const productionConfig = {
  mode: "production",
};

const developmentConfig = {
  devtool: "source-map",
};

const environmentConfig =
  process.env.NODE_ENV === "production" ? productionConfig : developmentConfig;

module.exports = {
  ...commonConfig,
  ...environmentConfig,
};
