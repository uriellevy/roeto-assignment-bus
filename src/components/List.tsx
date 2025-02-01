import { CONSTS } from "../consts/consts"
import { IBusStation } from "../interfaces/interfaces"

interface ListProps {
    busStations: IBusStation[]
}
const List = ({busStations}:ListProps) => {
    const {ENTER_LABEL, EXIT_LABEL} = CONSTS;

  return (
    <div className="list-container">
        {busStations.length !== 0 && busStations.map((busStation) => (
            <div key={busStation.station.enter} style={{color: busStation.isBlocking ? "red" : "black"}}>
                <span>{`${ENTER_LABEL} ${busStation.station.enter}`}</span>
                <span>{`${EXIT_LABEL} ${busStation.station.exit}`}</span>
            </div>
        ))}
    </div>
  )
}

export default List