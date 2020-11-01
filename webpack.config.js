const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    devtool: 'source-map',

    entry: [ '@babel/polyfill', path.join(__dirname, 'src/index.js') ], 

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].css', chunkFilename: 'css/[id].css' }),
        new HtmlWebpackPlugin({ 
            template: path.join(__dirname, 'public/index.html'),
            favicon: path.join(__dirname, 'src/assets/images/favicon.png')
        }),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ],
                        plugins: [ "@babel/plugin-proposal-class-properties" ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          esModule: false,
                        }
                    },
                    'css-loader?sourceMap',
                    'resolve-url-loader?sourceMap',
                    'sass-loader?sourceMap',
                    'postcss-loader?sourceMap'
                ]
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'images/[name].[ext]'}
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          bypassOnDebug: true, // webpack@1.x
                          disable: true, // webpack@2.x and newer
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    }
}