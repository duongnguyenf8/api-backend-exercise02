const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const cors = require("cors");
const router = jsonServer.router(path.join(__dirname, "../api/db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());

server.use(middlewares);
server.use(router);

server.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.set("Cache-Control", "no-store");
  next();
});

server.listen(3002, () => {
  console.log("running at 3002");
});
