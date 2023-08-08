const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "../api/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3002, () => {
  console.log("running at 3002");
});
