const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // Режим разработки
    entry: './src/main.js', // Точка входа вашего приложения Vue
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка для сгенерированных файлов
        filename: 'bundle.js' // Имя выходного файла
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // Регулярное выражение для файлов Vue
                loader: 'vue-loader' // Loader для файлов Vue
            },
            {
                test: /\.js$/, // Регулярное выражение для файлов JavaScript
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // Используем Babel для транспиляции JavaScript
                }
            },
            {
                test: /\.css$/, // Регулярное выражение для файлов CSS
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // Плагин для загрузки файлов Vue
        new HtmlWebpackPlugin({
            template: 'dist/index.html' // Путь к вашему index.html
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/',
        },
        compress: true,
        port: 9000 // Порт для dev сервера
    }
};