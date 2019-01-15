const path = require('path');

const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = (env, argv) => {

    const conf = {
        mode: 'development',
        devServer: {
            open: true,
            openPage: 'index.html',
            contentBase: path.join(__dirname, 'public'),
            watchContentBase: true,
            port: 8080,
        },
        entry: {app: './src/index.js'},
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/js/',
            filename: '[name].js',
            library: ['com', 'example'],
            libraryTarget: 'umd'
        },
        // optimization: {
        //     minimizer: [
        //         new BabelMinifyPlugin()
        //     ]
        // },
        optimization: {
            minimizer: [new TerserPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    'useBuiltIns': 'usage',
                                    'targets': '> 0.25%, not dead'
                                }]]
                            }
                        }
                    ],
                },
            ],
        },
    };

    if (argv.mode !== 'production') {
        conf.devtool = 'inline-source-map';
    }

    return conf;

};