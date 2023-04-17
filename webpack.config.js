const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPLugin = require('extract-text-webpack-plugin');

const styleLoader = {
    loader: 'style-loader',
    options: {
        sourceMap: true
    }
};
const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: true
    }
};
const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
};
const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true
    }
};

const useDevServer = false;
const publicPath = useDevServer ? 'http://localhost:8080/build/' : '/build/';

const webpackConfig = {
    entry: {
        rep_log: './assets/js/rep_log.js',
        login: './assets/js/login.js',
        layout: './assets/js/layout.js',
    },
    output: {
        path: path.resolve(__dirname,'web','build'),
        filename: '[name].js',
        publicPath: publicPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ExtractTextPLugin.extract({
                    use: [cssLoader],
                    fallback: styleLoader,
                }),
                
            },
            {
                test: /\.scss$/,
                use: ExtractTextPLugin.extract({
                    use: [
                        cssLoader,
                        resolveUrlLoader,
                        sassLoader,
                    ],
                    fallback: styleLoader,
                }),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:6].[ext]',
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:6].[ext]',
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery':'jquery',
        }),
        new CopyWebpackPlugin([
            // copies to {output}/static
            {from: './assets/static', to: 'static'},
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: [
                'layout',
                'manifest'
            ],
            minChunks: Infinity,
        }),
        new ExtractTextPLugin('[name].css'),

    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './web',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}
module.exports = webpackConfig;