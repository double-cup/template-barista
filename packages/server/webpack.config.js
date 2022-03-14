const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  mode: 'development',
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'swc-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'assets', 'html', 'index.html'),
    }),
  ],
  watchOptions: {
    followSymlinks: true,
    stdin: true,
  },
};

const productionConfig = {
mode: 'production',
};

const developmentConfig = {
    devtool: 'source-map',
};

const environmentConfig = process.env.NODE_ENV === 'production'
    ? productionConfig
    : developmentConfig;

module.exports = {
    ...commonConfig,
    ...environmentConfig,
};