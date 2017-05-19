// This library allows us to combine paths easily
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/js', 'main.jsx'),

    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'bundled.js'
    },

    module: {
        rules: [{
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};