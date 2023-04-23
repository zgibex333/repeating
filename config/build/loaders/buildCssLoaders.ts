import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCssLoaders = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? MiniCssExtractPlugin.loader : 'style-loader',
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: isDev
              ? '[name]__[local]__[hash]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }
}
