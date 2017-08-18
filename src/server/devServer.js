/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from '../../webpack.config.dev'

const app = express()
const PORT = 3000

const compiler = webpack(webpackDevConfig)

app.use(webpackDevMiddleware(
    compiler, {
        publicPath: webpackDevConfig.output.publicPath,
        hot: true,
        stats: {
            assets: true,
            colors: true,
            version: false,
            hash: false,
            timings: true,
            modules: false,
        },
    },
))

app.use(webpackHotMiddleware(compiler))

app.listen(PORT, () => {
    console.log(`Digg server started on port ${PORT}`)
})
