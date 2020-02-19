
let path = require('path');
let common = {
    entry: './src/index.js',
    module: {
        rules: [
          {  
            test: /\.(js)$/,
            loader: "babel-loader"
          }
        ]
    }
   
}

module.exports = {
  mode: 'production',
  target: 'web',
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'watermark.min.js',
    library: '',
    libraryTarget:'umd'
  }
};
