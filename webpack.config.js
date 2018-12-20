import path from 'path';
import fs from 'fs';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
const isAnalyse = process.argv.includes('--analyse');
const isServer = process.argv.includes('--server');
const isBrowser = !isServer;
const vendors = ['react', 'react-redux', 'react-router', 'qs', 'isomorphic-fetch', 'rxjs'];

console.log('IS_A_SERVER', isServer);

const defaultConfig = {
  entry: {
    app: './src/client/',
    vendor: vendors
  },
  output: {
    path: path.resolve(__dirname, 'build/dist/public'),
    publicPath: '/',
    filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash].js'
  },
  stats: {
    colors: true,
    reasons: isDev,
    timings: true,
    chunks: isVerbose,
    cached: isVerbose,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './src')],
        // Optional chaining does not work with babel v6, but works with v7.
        // For now copy from .babelrc
        options: {
          presets: ['es2015', 'react', 'flow'],
          plugins: [
            ['transform-runtime', {
              helpers: false,
              polyfill: false,
              regenerator: true,
            }],
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-es2015-spread',
            'transform-react-jsx',
            'transform-flow-strip-types'
          ]
        },
      },
      {
        test: /\.(png|jpe?g|woff|woff2|svg|eot|ttf|gif)$/i,
        loader: 'file-loader',
        options: {
          limit: 100000,
        },
      },
      {
        test: /\.(png|jpe?g|woff|woff2|svg|eot|ttf|gif)$/i,
        loader: 'url-loader',
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { sourceMap: isDev },
          },
          use: [
            'css-modules-flow-types-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev,
                importLoaders: 3,
                modules: true,
                localIdentName: isDev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]',
                minimize: !isDev,
                discardComments: { removeAll: true },
              },
            },
            'postcss-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'src/style')],
                sourceMap: true,
              },
            }],
        }),
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src'),
    ],
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: isDev ? 'css/base.css' : 'css/base-[hash].css', disable: false, allChunks: true }),
    new webpack.DefinePlugin({ 'process.env': { BROWSER: JSON.stringify(isBrowser), NODE_ENV: JSON.stringify(env) } }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: (module, count) => /node_modules/.test(module.resource) && count === 3 }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: isAnalyse }),
    ...(isDev
      ? []
      : [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            screw_ie8: true,
            warnings: false,
          },
          mangle: {
            screw_ie8: true,
          },
          output: {
            screw_ie8: true,
            comments: false,
          },
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
      ]),
  ]
};

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

const serverConfig = isServer ? {
  entry: {
    server: path.resolve(__dirname, 'src/server/'),
    vendor: 'babel-polyfill',
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: nodeModules,
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      ...defaultConfig.module.rules,
      ...[
        { test: /\.handlebars$/, loader: 'handlebars-loader' },
      ]
    ]
  },
  plugins: [
    // ...defaultConfig.plugins,
    ...[
      new ExtractTextPlugin('server.css'),
      new webpack.BannerPlugin({
        // Enables source map support for stack traces
        // https://github.com/evanw/node-source-map-support
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
    ],
  ],
} : {};

const config = { ...defaultConfig, ...serverConfig };

export default config;
