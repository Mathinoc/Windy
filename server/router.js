const { Router } = require("express");
const { getAll, getStation } = require("./controllers/index_controller.js");

const router = Router();

router
  .get("/stations", getAll)
  .get("/station/:id", getStation);

module.exports = router;
