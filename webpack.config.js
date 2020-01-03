
let path = require('path');
let common = {
    entry: './src/index.js',
    module: {
        rules: [
            {loader: "babel-loader"}
        ]
    }
   
}
// let serverConfig = {
//   mode: 'production',
//   target: 'node',
//   ...common,
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'lib.node.js'
//   }
// };

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

module.exports = [ 
    //serverConfig,
    clientConfig 
];