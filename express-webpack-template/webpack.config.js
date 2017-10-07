module.exports = {
  entry: "./js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
      // 19. (relay starts here) include stage-0 and install with npm
        query: { presets: ['react', 'es2015', 'stage-0'] }
      }
    ]
  }
};
