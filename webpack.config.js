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
  devtool: 'source-map',
  // What build?
  entry: {
    "scripts": path.resolve(__dirname, srcJS + "/scripts.js"),
    "base": path.resolve(__dirname, srcSass + "/base/index.scss"),
    "components": path.resolve(__dirname, srcSass + "/components/index.scss"),
    "layout": path.resolve(__dirname, srcSass + "/layout/index.scss"),
    "print": path.resolve(__dirname, srcSass + "/print/index.scss"),
    "state": path.resolve(__dirname, srcSass + "/state/index.scss"),
    "theme": path.resolve(__dirname, srcSass + "/theme/index.scss"),
  },
  // Where put build?
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, distJS)
  },
  resolve: {
    alias: {
      'decanter': path.resolve(npmPackage + 'decanter/core/src/img')
    }
  },
  // Additional module rules.
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      // Apply Plugins to SCSS/SASS files.
      {
        test: /\.s[ac]ss$/,
        use: [
          // Extract loader.
          MiniCssExtractPlugin.loader,
          // CSS Loader. Generate sourceMaps.
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true
            }
          },
          // Post CSS. Run autoprefixer plugin.
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer( {
                  browsers: ['last 2 versions', 'ie 11']
                } )
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, npmPackage, "bourbon/core"),
                path.resolve(__dirname, srcSass),
                path.resolve(__dirname, npmPackage + "/decanter/core/src/scss")
              ],
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          }
        ]
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          // A loader for webpack which transforms files into base64 URIs.
          // https://github.com/webpack-contrib/url-loader
          {
            loader: 'url-loader',
            options: {
              // Maximum size of a file in bytes. 8.192 Kilobtyes.
              limit: 8192,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  publicPath: "../assets",
                  outputPath: "../assets"
                }
              }
            }
          }
        ]
      }
    ]
  },
  // Build optimizations.
  optimization: {
    // Uglify the Javascript & and CSS.
    minimizer: [
      // Shrink JS.
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      // Shrink CSS.
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // Plugin configuration.
  plugins: [
    // Output css files.
    new MiniCssExtractPlugin({
      filename:  "../css/[name].css"
    }),
    // A webpack plugin to manage files before or after the build.
    // Used here to:
    // - clean all generated files (js AND css) prior to building
    // - copy generated files to the styleguide after building
    // Copying to the styleguide must happen in this build because the 2 configs
    // run asynchronously, and the kss build finishes before this build generates
    // the assets that need to be copied.
    // https://www.npmjs.com/package/filemanager-webpack-plugin
    new FileManagerPlugin({
      onStart: {
        delete: [distDir + "/templates/decanter/**/*"]
      },
      onEnd: {
        copy: [
          {
            source: npmPackage + "/decanter/core/src/templates/**/*.twig",
            destination: distDir + "/templates/decanter/"
          }
        ],
        delete: [
          distJS + '/base.js',
          distJS + '/base.js.map',
          distJS + '/components.js',
          distJS + '/components.js.map',
          distJS + '/layout.js',
          distJS + '/layout.js.map',
          distJS + '/print.js',
          distJS + '/print.js.map',
          distJS + '/state.js',
          distJS + '/state.js.map',
          distJS + '/theme.js',
          distJS + '/theme.js.map'
        ]
      },
    }),
    // Add a plugin to watch other files other than that required by webpack.
    // https://www.npmjs.com/package/filewatcher-webpack-plugin
    new ExtraWatchWebpackPlugin( {
      files: [
        srcDir + '/**/*.twig',
        srcDir + '/**/*.json'
      ]
    }),
  ]
};

// Add the configuration.
module.exports = [ webpackConfig ];
