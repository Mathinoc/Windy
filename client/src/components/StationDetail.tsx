import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { stationDetail } from '../interfaces/station';
import { getStationDetail } from '../services/stationData';
import FullScreenLoadingIndicator from './FullScreenLoadingIndicator';
import WindChart from './WindChart';
import arrow from '../assets/right-arrow.png';
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
    return <FullScreenLoadingIndicator />
  } else {
    return (
      <div className="StationDetail" >
        <Link role="button" to="/" >
          <img src={arrow} alt="arrow"/>
          <span>back to map</span>
        </Link>
        <h2>{station?.name}</h2>
        <p>Average daily wind speed: {station?.statistics.average.daily.force} knots</p>
        <p>Average weekly wind speed: {station?.statistics.average.weekly.force} knots</p>
        <WindChart windData={station!.readings}/>
      </div>
    )
  }

}
