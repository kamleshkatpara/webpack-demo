const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.common.js");
const options = {
  contentBase: "./dist",
  hot: true,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

app.use("*", (req, res, next) => {
  const indexFile = path.resolve(__dirname, "./dist/index.html");
});

server.listen(5000, "localhost", () => {
  console.log("dev server listening on port 5000");
});
