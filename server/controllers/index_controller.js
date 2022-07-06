function getAll(req, res) {
  try {
    const jsonData = require("./../data/list.json");
    res.status(200);
    res.send(jsonData);
  } catch (error) {
    return new Error("500 could not get the items");
  }
}

function getStation(req, res) {
  try {
    const stationId = req.params.id;
    const path = `./../data/detail/${stationId}.json`;
    const jsonData = require(path);
    res.status(200);
    res.send(jsonData);
  } catch (error) {
    return new Error("500 could not get the items");
  }
}

module.exports = { getAll, getStation };
