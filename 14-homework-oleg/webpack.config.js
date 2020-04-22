const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
// };
// module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },{
                        
                test: /\.html$/i,
                loader: 'html-loader',
            
        },
            {
                test: /\.(mp3)$/i,
                use: [
                    {
                        loader: "file-loader"

                    }, 
                ],
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({filename: "index.html",
        template: "./src/index.html"})]
};
