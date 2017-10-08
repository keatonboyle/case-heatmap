const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use('/templates', express.static('src'));

// TODO: currently, the API for getting case text and citations is
// simply retrieving a file.  Consider adding preprocessing or
// extracting this into a custom handler for flexibility later.
app.use('/assets/cases', express.static('assets/cases'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3000, function() {
  console.log('Started on port 3000\n');
});
