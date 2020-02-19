
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

let clientConfig = {
  mode: 'production',
  target: 'web',
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: 'waterMark',
    libraryTarget:'umd'
  }
};
let webConfig = {
  mode: 'production',
  target: 'web',
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'watermark.min.js',
    library: '',
    libraryTarget:'window'
  }
};
module.exports = [ 
    webConfig,
    clientConfig 
];