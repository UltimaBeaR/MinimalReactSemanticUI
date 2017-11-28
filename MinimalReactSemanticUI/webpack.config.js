const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const bundleOutputDir = './wwwroot/dist';

// ToDo: При первоначальной установке npm зависимостей нужно выполнить npm rebuild node-sass

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    process.env.NODE_ENV = isDevBuild ? "development" : "production";

    return [{
        stats: { modules: false },
        entry: { 'main': './ClientApp/boot.jsx' },
        resolve: { extensions: ['.js', '.jsx'] },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        module: {
            rules: [
                { test: /\.jsx?(\?|$)/, include: /ClientApp/, use: { loader: 'babel-loader', options: { cacheDirectory: true } } },
                {
                    test: /\.s?css(\?|$)/,
                    use: isDevBuild ?
                        [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 2,
                                    modules: true,
                                    localIdentName: '[name]__[local]__[hash:base64:5]'
                                }
                            },
                            'sass-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: function () {
                                        return [autoprefixer]
                                    }
                                }
                            }
                        ]
                        : ExtractTextPlugin.extract({ use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true,
                                    importLoaders: 2,
                                    modules: true,
                                    localIdentName: '[name]__[local]__[hash:base64:5]'
                                }
                            },
                            'sass-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: function () {
                                        return [autoprefixer]
                                    }
                                }
                            }
                        ]})
                },
                { test: /\.(png|jpg|jpeg|gif|svg)(\?|$)/, use: 'url-loader?limit=25000' }
            ]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('site.css')
        ])
    }];
};