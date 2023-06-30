const PORT = 5000
const path = require('path')
const jsonServer= require('json-server')
const server = jsonServer.create()
const router= jsonServer.router(path.join(__dirname,'data.json'))
console.log(__dirname)
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('',router)
server.listen(PORT, ()=> console.log(`JSON Server is running on port ${PORT}`))
// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("data.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use("", router);
// server.listen(process.env.PORT || 5000, () => {
//   console.log("JSON Server is running");
// });