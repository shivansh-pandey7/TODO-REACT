const path = require('path');
const webpack = require('webpack')   
const Dotenv = require('dotenv-webpack')


const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => { 
    console.log(env);
    let environ;
    if(env.development){
        environ = "development";
    }else if(env.production){
        environ = "production";
    } else if(env.staging){
        environ = "staging";
    }
    return ({
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path : path.resolve(__dirname, "dist"),
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join(__dirname, "src", "index.html"),
        }),
    //     new webpack.ProvidePlugin({
    //         process: 'process/browser',
    //  }),
        new Dotenv({
            path: `./.env.${environ}`
        }),
     
    ],
    module: {
        rules: [
            {
                //here we use js to tell webpack to use babel-loader to transpile files with .js
                test: /\.?js$/,
                exclude:/node_modules/,
                use : {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test:/\.css$/i,
                use : ["style-loader", "css-loader"],
            },
            {
                test:/\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            
        ]
    }
})}