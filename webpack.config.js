const path = require('path');

const config = {
    watch: true,
    entry: {
        bundle: ['./src/index.js', 'babel-polyfill'],
        options: './src/options/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};

module.exports = config;
