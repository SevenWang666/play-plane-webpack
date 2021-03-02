const path = require('path')
module.exports = {
    output:{
        filename:'build.js',
        path:path.resolve(__dirname,'dist')

    },
    // mode:'development',
   // mode:"production",
    devtool:'source-map',
    entry:path.resolve(__dirname,'./main.js'),
    devServer:{
        contentBase:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:"images",
                            publicPath: "./images",
                        }
                    }
                ]
            }
        ]
    }
}