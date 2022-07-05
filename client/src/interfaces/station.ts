export interface stationList {
  id: number;
  name: string;
  loc: {
    lat: number;
    long: number;
  };
}
export interface stationDetail {
  id: number;
  name: string;
  loc: {
    lat: number;
    long: number;
  };
  statistics: {
    average: {
      daily: { force: number };
      weekly: { force: number };
    };
  };
  readings: {
    timestamp: string;
    force: number;
    dir: number;
  }[];
}
