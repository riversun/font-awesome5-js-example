const path = require('path');

module.exports = (env, argv) => {
    const conf = {
        mode: 'development',
        devServer: {
            open: true,
            contentBase: path.join(__dirname, 'public'),
        },
        entry: {app: './src/index.js'},
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/js/',
            filename: '[name].js',
            libraryTarget: 'umd'
        }
    };
    return conf;
};