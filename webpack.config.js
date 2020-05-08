/**
 * Webpack Configuration File
 * @type {[type]}
 */

// /////////////////////////////////////////////////////////////////////////////
// Requires / Dependencies /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer')({ grid: true });
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

// /////////////////////////////////////////////////////////////////////////////
// Paths ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const npmPackage = 'node_modules/';
const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");
const srcSass = path.resolve(__dirname, process.env.npm_package_config_srcSass);
const distSass = path.resolve(__dirname, process.env.npm_package_config_distSass);
const srcJS = path.resolve(__dirname, process.env.npm_package_config_srcJS);
const distJS = path.resolve(__dirname, process.env.npm_package_config_distJS);
const srcAssets = path.resolve(__dirname, process.env.npm_package_config_srcAssets);
const distAssets = path.resolve(__dirname, process.env.npm_package_config_distAssets);

// /////////////////////////////////////////////////////////////////////////////
// Functions ///////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////
// Config //////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Start configuring webpack.
var webpackConfig = {
  // What am i?
  name: 'stanford_basic',
  // Allows for map files.
  devtool: 'source-map',
  // What build?
  entry: {
    "admin":         path.resolve(__dirname, srcSass, "admin/index.scss"),
    "base":          path.resolve(__dirname, srcJS,   "base.js"),
    "behaviors":     path.resolve(__dirname, srcJS,   "behaviors.js"),
    "ckeditor":      path.resolve(__dirname, srcSass, "ckeditor.scss"),
    "components":    path.resolve(__dirname, srcSass, "components/index.scss"),
    "layout":        path.resolve(__dirname, srcSass, "layout/index.scss"),
    "print":         path.resolve(__dirname, srcSass, "print/index.scss"),
    "search-page":   path.resolve(__dirname, srcSass, "pages/search/index.scss"),
    "state":         path.resolve(__dirname, srcSass, "state/index.scss"),
    "theme":         path.resolve(__dirname, srcSass, "theme/index.scss"),
    "user_login":    path.resolve(__dirname, srcSass, "admin/user_login.scss"),
  },
  // Where put build?
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, distJS)
  },
  // Relative output paths for css assets.
  resolve: {
    alias: {
      'basic-assets': path.resolve(__dirname, 'src/assets'),
      'decanter-assets': path.resolve(__dirname, npmPackage, 'decanter/core/src/img'),
      'fa-fonts': path.resolve(__dirname, npmPackage, '@fortawesome/fontawesome-free/webfonts')
    }
  },
  // Additional module rules.
  module: {
    rules: [
      // Drupal behaviors need special handling with webpack.
      // https://www.npmjs.com/package/drupal-behaviors-loader
      {
        test: /\.behavior.js$/,
        exclude: /node_modules/,
        options: {
          enableHmr: false
        },
        loader: 'drupal-behaviors-loader'
      },
      // Good ol' Babel.
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
                autoprefixer
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, npmPackage)
              ],
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          }
        ]
      },
      // Apply plugin to font assets.
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          publicPath: "../assets/fonts",
          outputPath: "../assets/fonts"
        }
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          // A loader for webpack which transforms files into base64 URIs.
          // https://github.com/webpack-contrib/url-loader
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../assets/img",
              outputPath: "../assets/img"
            }
          }
        ]
      },
      // Apply plugins to svg assets.
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../assets/svg",
              outputPath: "../assets/svg"
            }
          }
        ]
      },
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
    ],
  },
  // Plugin configuration.
  plugins: [
    // Remove JS files from render.
    new FixStyleOnlyEntriesPlugin(),
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
        delete: [distDir]
      },
      onEnd: {
        copy: [
          {
            source: npmPackage + "/decanter/core/src/templates/**/*.twig",
            destination: distDir + "/templates/decanter/"
          },
          {
            source: srcDir + "/assets/**/*",
            destination: distDir + "/assets/"
          }
        ],
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
