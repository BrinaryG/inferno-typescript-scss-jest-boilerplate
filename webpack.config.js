const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env) {
    var Plugins = [];

    if (!env) {
        env = {
            minimize: false
        };
    }
    env.minimize = !!env.minimize;
    env.mode = env.minimize ? 'production' : 'development';

    Plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env.mode)
            }
        })
    );

    if (env.minimize) {
        Plugins.push(new webpack.IgnorePlugin(/inferno-devtools$/));
    }

    Plugins.push(new ExtractTextPlugin({ filename: 'main.css' }));

    var config = {
        mode: env.mode,
        optimization: {
            minimize: env.minimize
        },
        cache: true,
        // Enable source maps for debugging webpack's output.
        devtool: 'source-map',
        entry: {
            main: path.join(__dirname, 'src', 'index.tsx')
        },
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: '[name].js'
        },
        plugins: Plugins,
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, // All ts and tsx files will be process by
                    loaders: ['babel-loader'], // first babel-loader, then ts-loader
                    exclude: /node_modules/ // ignore node_modules
                },
                {
                    test: /\.jsx?$/, // all js and jsx files will be processed by
                    loader: 'babel-loader', // babel-loader
                    exclude: /node_modules/ // ignore node_modules
                },

                {
                    test: /\.(scss|sass|css)$/i,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: { minimize: env.minimize }
                            },
                            'postcss-loader',
                            'sass-loader'
                        ]
                    })
                },

                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: ExtractTextPlugin.extract({
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    })
                }
            ]
        }
    };

    if (!env.minimize) {
        /* When doing development workflow we want to make sure webpack picks up development build of inferno */
        config.resolve.alias = {
            inferno: __dirname + '/node_modules/inferno/dist/index.dev.esm.js'
        };
    }

    return config;
};
