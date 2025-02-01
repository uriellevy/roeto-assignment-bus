import { IBusStation } from "../interfaces/interfaces"

interface ListProps {
    busStations: IBusStation[]
}
const List = ({busStations}:ListProps) => {

  return (
    <div className="list-container">
        {busStations.length !== 0 && busStations.map((busStation) => (
            <div key={busStation.station.enter} style={{color: busStation.isBlocking ? "red" : "black"}}>
                <span>Enter: {busStation.station.enter}</span>
                <span>Exit: {busStation.station.exit}</span>
            </div>
        ))}
    </div>
  )
}

export default List