const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, "./dist"),
    },
    devtool : "source-map",
    devServer : {
        static :{
            directory : path.join(__dirname, './src'),
        },
        port : 3000,
        hot : 'only',
        open : true,
    },
    resolve : {
        extensions : [".ts", ".tsx", ".js", ".css"],
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test : /\.m?js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : [
                            ['@babel/preset-env', { targets : "defaults"}]
                        ],
                        plugins : ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test : /\.(ts|tsx)$/,
                use : ["ts-loader"],
            },
            {
                test : /\.(png|jp?g|gir)$/i,
                use : [
                    {
                        loader : 'file-loader',
                    }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html',
            title : 'Layout',
        })
    ]
}