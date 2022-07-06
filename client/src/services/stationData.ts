const baseURL = 'http://localhost:3001/';

export function getAllStations () {
  const options = {
    method: 'GET',
  }
  return fetch(`${baseURL}stations`, options)
    .then(result => result.json())
    .catch(error => console.error(error))
}
export function getStationDetail (stationId: number) {
  const options = {
    method: 'GET',
  }
  return fetch(`${baseURL}station/${stationId}`, options)
    .then(result => result.json())
    .catch(error => console.error(error))
}
