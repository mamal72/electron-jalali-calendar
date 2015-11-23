module.exports = {
  entry: './src/renderer/index.js',
  output: {
    path: './dist/renderer',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};
