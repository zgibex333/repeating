import path from 'path'
import webpack from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  if (config?.module && config.module.rules) {
    config.module.rules = config.module?.rules?.map((rule) => {
      if (typeof rule === 'object' && /svg/.test(rule.test as string)) {
        return {
          ...rule,
          exclude: /\.svg$/i,
        }
      }
      return rule
    })
  }
  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  })
  config.module?.rules?.push(buildCssLoaders(false))
  return config
}
