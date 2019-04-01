/**
 * Webpack Configuration File
 * @type {[type]}
 */

 // Requires / Dependencies
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");

// Paths
const npmPackage = 'node_modules/';
const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");
const srcSass = path.resolve(__dirname, process.env.npm_package_config_srcSass);
const distSass = path.resolve(__dirname, process.env.npm_package_config_distSass);
const srcJS = path.resolve(__dirname, process.env.npm_package_config_srcJS);
const distJS = path.resolve(__dirname, process.env.npm_package_config_distJS);
const srcAssets = path.resolve(__dirname, process.env.npm_package_config_srcAssets);
const distAssets = path.resolve(__dirname, process.env.npm_package_config_distAssets);

// Start configuring webpack.
var webpackConfig = {
  // What am i?
  name: 'stanford_basic',
  // Allows for map files.
  'devtool': 'source-map',
  // What build?
  entry: {
    "scripts": path.resolve(__dirname, srcJS + "/scripts.js"),
    "base": path.resolve(__dirname, srcSass + "base/index.scss"),
    "components": path.resolve(__dirname, srcSass + "components/index.scss"),
    "layout": path.resolve(__dirname, srcSass + "layout/index.scss"),
    "print": path.resolve(__dirname, srcSass + "print/index.scss"),
    "state": path.resolve(__dirname, srcSass + "state/index.scss"),
    "theme": path.resolve(__dirname, srcSass + "theme/index.scss"),
  },
  // Where put build?
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, distJS)
  },
  // Additional module rules.
  module: {
    rules: [

    ]
  },
  // Build optimizations.
  optimization: {

  },
  // Plugin configuration.
  plugins: [

  ]
};

// Add the configuration.
module.exports = [ webpackConfig ];
