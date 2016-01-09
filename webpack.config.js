module.exports = {
  entry: './app.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'jsx-loader?harmony' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'file-loader?name=img-[sha512:hash:base64:7].[ext]' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.less$/, loader: "style!css!less" }
    ]
  },
  devtool: 'sourcemap',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
