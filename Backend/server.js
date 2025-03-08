const http = require("http");
const app = require("./app");
const { initializeScoket } = require("./socket");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeScoket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
