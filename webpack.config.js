const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

  
module.exports = {
    entry: ["babel-polyfill","./src/index.js"], // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        filename: "bundle.js"       // название создаваемого файла
    },
  
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.js?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
        ]
    },
	plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}