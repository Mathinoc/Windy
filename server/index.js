const Express = require("express");
const router = require("./router");
const cors = require("cors");
const PORT = 3001;

const app = Express();

// MIDDLEWARE
app.use(cors());
app.use(Express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`Server up and listening on http://localhost:${PORT} 🪁`);
});