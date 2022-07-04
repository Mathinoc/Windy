export function getAllStations () {
  const allStations = require("../data/list.json");
  return allStations
}
export function getStationDetail (id: number) {
  const station = require(`../data/detail/${id}.json`);
  return station

}