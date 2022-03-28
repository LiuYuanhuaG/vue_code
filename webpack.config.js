const path = require('path'), HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: './src/index.js',
    //出口文件
    output: {
        // 出口文件路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 选择模式 提高打包速率
    devtool: 'source-map',
    resolve: {
        // 配置查找路径，从左至右依次查找
        modules: [path.resolve(__dirname, ''), path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') })
    ],
    mode: 'development',
};