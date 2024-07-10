const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

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
        new VueLoaderPlugin() // Плагин для загрузки файлов Vue
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    }
};