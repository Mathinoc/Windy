import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { stationDetail } from '../interfaces/station';
import { getStationDetail } from '../services/stationData';
import WindChart from './WindChart';
import '../styles/StationDetail.scss';

export default function StationDetail() {
  const [station, setStation] = useState<stationDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await getStationDetail(parseInt(id!));
      setStation(data)
    }
    fetchData().then(() => setIsLoading(false));
    
  }, []);

  if (isLoading) {
    return <div>Loading</div>
  } else {
    return (
      <div className="StationDetail" >
        <h2>{station?.name}</h2>
        <p>Average daily wind speed: {station?.statistics.average.daily.force} knots</p>
        <p>Average weekly wind speed: {station?.statistics.average.weekly.force} knots</p>
        <WindChart windData={station!.readings}/>
      </div>
    )
  }

}
