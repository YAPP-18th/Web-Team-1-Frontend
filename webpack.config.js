const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = () => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
  const isEnvProduction = process.env.NODE_ENV === 'production';

  return {
    mode: isEnvDevelopment ? 'development' : 'production',
    devtool: isEnvDevelopment ? 'inline-source-map' : 'hidden-source-map',
    // node: {
    //   fs: 'empty',
    //   net: 'empty',
    // },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        '#apis': path.resolve(__dirname, 'src', 'apis'),
        '#common': path.resolve(__dirname, 'src', 'common'),
        '#components': path.resolve(__dirname, 'src', 'components'),
        '#containers': path.resolve(__dirname, 'src', 'containers'),
        '#hooks': path.resolve(__dirname, 'src', 'hooks'),
        '#pages': path.resolve(__dirname, 'src', 'pages'),
        '#styles': path.resolve(__dirname, 'src', 'styles'),
        '#static': path.resolve(__dirname, 'src', 'static'),
        '#store': path.resolve(__dirname, 'src', 'store'),
        '#types': path.resolve(__dirname, 'src', 'types'),
        '#utils': path.resolve(__dirname, 'src', 'utils'),
        '#fixtures': path.resolve(__dirname, 'src', 'fixtures'),
      },
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist'),
      stats: 'errors-warnings',
      overlay: true,
    },
    entry: path.join(__dirname, 'src', 'index'),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          exclude: path.join(__dirname, 'node_modules'),
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: path.join(__dirname, 'node_modules'),
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'static/media',
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      // new Dotenv(),
      isEnvDevelopment && new ReactRefreshWebpackPlugin(),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      // isEnvDevelopment &&
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: 'server',
      //     analyzerPort: 4000,
      //     openAnalyzer: false,
      //   }),
      // isEnvProduction && new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
      isEnvProduction && new webpack.LoaderOptionsPlugin({ minimize: true }),
      // isEnvProduction &&
      //   new CopyPlugin({
      //     patterns: [
      //       {
      //         from: path.join(__dirname, 'public', 'robots.txt'),
      //         to: path.join(__dirname, 'dist', 'robots.txt'),
      //       },
      //     ],
      //   }),
      new webpack.EnvironmentPlugin({ NODE_ENV: isEnvDevelopment ? 'development' : 'production' }),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: path.join(__dirname, 'public', '/index.html'),
      }),
      new CleanWebpackPlugin(),
      // new FaviconsWebpackPlugin({
      //   logo: path.join(__dirname, 'public', '/logo.png'),
      // }),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      }),
    ].filter(Boolean),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[fullhash:8].js',
      publicPath: '/',
    },
  };
};
