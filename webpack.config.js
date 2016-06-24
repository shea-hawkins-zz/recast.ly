//webpack config
module.exports = {
  entry: "./src/index.js",
  output: {
      path: __dirname,
      filename: "compiled/bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015', 'react']
            }
          }
      ]
  }
};