import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export default function buildWebpackConfig(buildOptions: BuildOptions) {
  return {
    mode: buildOptions.mode,
    entry: buildOptions.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: buildOptions.paths.build,
      clean: true,
    },
    plugins: buildPlugins(buildOptions),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devServer: buildDevServer(buildOptions)
  };
}
