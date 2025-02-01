import { FormEvent, useState } from "react"
import { IBusStation } from "../interfaces/interfaces";

interface FormProps {
    setBusStations: React.Dispatch<React.SetStateAction<IBusStation[]>>
}
const Form = ({setBusStations}: FormProps) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBusStations(getStations());
    }

    const getStations = () => {
        let tempPeopleCount = 0;
        const stations:number[][] = JSON.parse(userInput);
        const newStations = stations.map(([enter,exit]) => {
            tempPeopleCount += enter - exit;
            if(tempPeopleCount < 0){
                tempPeopleCount = 0;
                return {isBlocking: true, station:{exit, enter}};
            }else return {isBlocking: false, station:{exit, enter}};
        })

        return newStations as IBusStation[];
    }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Stations..." onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form