import React, {useEffect, useRef} from 'react';
import { stationList } from '../interfaces/station';
import '../styles/MapStations.scss';
import pin from '../assets/pin.png';

import ReactDOM from 'react-dom';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

export default function MapStations({
  stations,
  position,
  selectedStation,
  setSelectedStation
}: {
  stations: stationList[],
  position: { lat: number, long: number },
  selectedStation: stationList | undefined,
  setSelectedStation: React.Dispatch<React.SetStateAction<stationList | undefined>>
}) {


  const map = useRef<L.Map>();
  const clusterLayer = useRef<L.MarkerClusterGroup>();

  useEffect(() => {
    clusterLayer.current?.remove();

    if (!map.current) {
      return;
    }

    if (clusterLayer && clusterLayer.current) {
      map.current.removeLayer(clusterLayer.current);
      clusterLayer.current?.remove();
    }

    clusterLayer.current = L.markerClusterGroup();

    stations.forEach((station) => {
      let oneMarker = L.marker(L.latLng(station.loc.lat, station.loc.long)).setIcon(L.icon({iconUrl: pin, iconSize: [25,25], iconAnchor: [12.5,25]}));
      //@ts-ignore
      oneMarker.options['id'] = station.id;
      oneMarker.addTo(clusterLayer.current!);
      oneMarker.on('click', () => {
        console.log('clickkkk')
        let clickedStation = stations.find((elem) => elem.id === station.id);
        setSelectedStation(clickedStation);
        // if (clickedStation?.id === station.id) {
        //   oneMarker.setStyle({ color: '#357960' });
        // }
      });
    });

    map.current.addLayer(clusterLayer.current);
  }, [stations, setSelectedStation]);

  useEffect(() => {
    const mapNode = ReactDOM.findDOMNode(document.getElementById('mapId')) as HTMLDivElement;
    if (!mapNode || map.current) {
      return;
    }
    map.current = L.map(mapNode).setZoom(8).setView(L.latLng(position.lat, position.long));

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 15, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' }).addTo(
      map.current
    );
  }, [position.lat, position.long]);


  return (
    <div className="MapStations">
      <div id="mapId"></div>
    </div>
  )
}
