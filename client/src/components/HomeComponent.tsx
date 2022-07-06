import { useState, useEffect } from 'react';
import { stationList } from '../interfaces/station';
import { getAllStations } from '../services/stationData';
import MapStations from './MapStations';
import StationPreview from './StationPreview';
import '../styles/HomeComponent.scss';


export default function HomeComponent() {

  const [stations, setStations] = useState<stationList[]>([]);
  const [selectedStation, setSelectedStation] = useState<stationList | undefined>(undefined);
  const defaultPosition = { lat: 21.436120, long: -158.001074 };

  useEffect(() => {
    async function fetchData() {
      const data = await getAllStations();
      setStations(data)
    }
    fetchData()
  }, []);

  useEffect(() => {
    console.log(selectedStation)
  }, [selectedStation])

  return (
    <section className="HomeComponent">
      <MapStations
        stations={stations}
        position={defaultPosition}
        setSelectedStation={setSelectedStation}
      />
      {selectedStation &&
        <StationPreview selectedStation={selectedStation} />
      }
    </section>
  )
}
