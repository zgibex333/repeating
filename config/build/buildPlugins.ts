import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins(
  buildOptions: BuildOptions
): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(buildOptions.paths.html),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(buildOptions.isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
