const webpack = require('webpack')

module.exports = {
    mode: 'development', 
    // mode: 'production',
    entry: './src/principal.js',
    // output: {
    //     filename: 'principal.js',
    //     path: __dirname + '/pasta'
    // }  
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}