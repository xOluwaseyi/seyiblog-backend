// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./data/db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(PORT);
