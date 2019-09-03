const path=require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin')

const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:['@babel/polyfill','./src/js/index.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/bundle.js'
    },
    devServer:
    {
        contentBase:'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // include specific files based on a RegExp
            include: /dir/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
          })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
}