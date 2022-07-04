import { useState, useEffect } from 'react';
import { stationList } from '../interfaces/station';
import { getAllStations } from '../services/stationData';
import MapStations from './MapStations';



export default function HomeComponent() {

  const [stations, setStations] = useState<stationList[]>([]);
  const [position, setPosition] = useState<{ lat: number, long: number }>({ lat: 21.436120, long: -158.001074 });
  const [selectedStation, setSelectedStation] = useState<stationList | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllStations();
      setStations(data)
    }
    fetchData()
  }, [])

  return (
    <section>
      <MapStations
      stations={stations}
      position={position}
      selectedStation={selectedStation}
      setSelectedStation={setSelectedStation}
      />
    </section>
  )
}
