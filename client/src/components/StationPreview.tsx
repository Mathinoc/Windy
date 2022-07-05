import { Link } from 'react-router-dom';
import { stationList } from '../interfaces/station';
import '../styles/StationPreview.scss';

export default function StationPreview({ selectedStation }: { selectedStation: stationList | undefined }) {
    return (
      (<Link to={`/station/${selectedStation!.id}`} className="StationPreview">
        <p>
          {selectedStation!.name}
        </p>
      </Link>)
    )
}
