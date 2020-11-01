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
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'public/index.html')}),
        new MiniCssExtractPlugin({ filename: 'css/[name].css', chunkFilename: 'css/[id].css' })
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
                    'sass-loader?sourceMap',
                    'postcss-loader?sourceMap'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: { name: 'images/[name].[ext]'}
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    }
}