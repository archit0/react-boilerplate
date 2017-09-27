var path = require('path');
module.exports = {
  entry :"./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    inline: true,
    contentBase: "./dist/",
    port: 3000
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
              presets: ['env', 'react']
           }
      }
    ]
  }
}
