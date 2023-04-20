import type { WebpackConfiguration } from 'webpack-dev-server'
import buildDevServer from './buildDevServer'
import buildLoaders from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'

export default function buildWebpackConfig(
  buildOptions: BuildOptions
): WebpackConfiguration {
  return {
    mode: buildOptions.mode,
    entry: buildOptions.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: buildOptions.paths.build,
      clean: true,
    },
    plugins: buildPlugins(buildOptions),
    module: {
      rules: buildLoaders(buildOptions),
    },
    resolve: buildResolvers(buildOptions),
    devtool: buildOptions.isDev ? 'inline-source-map' : undefined,
    devServer: buildOptions.isDev ? buildDevServer(buildOptions) : undefined,
  }
}
