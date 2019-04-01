/**
 * Webpack Configuration File
 * @type {[type]}
 */

 // Requires / Dependencies
const path = require('path');
const webpack = require('webpack');
const decanter = require('decanter');
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
const srcSass = path.resolve(__dirname, process.env.npm_package_config.srcSass);
const distSass = path.resolve(__dirname, process.env.npm_package_config.distSass);
const srcJS = path.resolve(__dirname, process.env.npm_package_config.srcJS);
const distJS = path.resolve(__dirname, process.env.npm_package_config.distJS);
const srcAssets = path.resolve(__dirname, process.env.npm_package_config.srcAssets);
const distAssets = path.resolve(__dirname, process.env.npm_package_config.distAssets);

// Start configuring webpack.
var webpack = {
  // What am i?
  name: 'stanford_basic',
  // Allows for map files.
  'devtool': 'source-map',
  // What build?
  entry: {
    "stanford_basic": path.resolve(__dirname, srcJS + "/stanford_basic.js")
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
}

// Add the configuration.
module.exports = [ webpack ];
