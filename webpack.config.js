const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/main.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?url=false',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [ require('autoprefixer')('last 2 versions') ]
                            }
                        },
                        'stylus-loader'
                    ]
                })
			}
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: ('styles.css')
        })
    ],

    devServer: {
		inline: true,
		contentBase: './public',
		port: 9090,
        // host: '192.168.0.100',
        host: 'localhost',
        proxy: {
            '/': 'http://localhost:3000'
        }
    },

    devtool: 'cheap-eval-source-map',
    
    resolve: {
        extensions: ['.js', '.json', '*']
    }
};