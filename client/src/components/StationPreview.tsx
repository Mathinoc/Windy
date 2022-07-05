import { Link } from 'react-router-dom';
import { stationList } from '../interfaces/station';
import '../styles/StationPreview.scss';
import arrow from '../assets/right-arrow.png'

export default function StationPreview({ selectedStation }: { selectedStation: stationList | undefined }) {
  return (
    (<div className="StationPreview">
      <Link to={`/station/${selectedStation!.id}`} >
        <div className="StationPreview__writing">
          <p>{selectedStation!.name}</p>
          <p className="StationPreview__small">See details</p>
        </div>
        <img src={arrow} alt="arrow" />
      </Link>
    </div>)
  )
}
