const server = require("./api/server.js");
const PORT = process.env.PORT || 4000;
server.listen(4000, () => {
  console.log(`\n*** Server Running on PORT: ${PORT} ***\n`);
});
