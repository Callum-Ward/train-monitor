import React from "react";
import {RootTrainObject} from "../../api/trainDataType";


export default function NewBoardEntry({TrainService}) {

    const arrivalTime = () => {
        const noArrival = "None"
        if (!TrainService.sta) return noArrival
        if (!TrainService.eta) return noArrival
        if (TrainService.eta == "On time") return TrainService.std
        return TrainService.eta
    }

    const callingPointArrival = (station) => {
        const noArrival = "None"
        if (!station.st) return noArrival
        if (station.et == "On time") return station.st
        return station.et
    }


    return (
        <div className="outline grid" >
            <div className="">
                <h1>{arrivalTime()}</h1>
                <h1>{TrainService?.destination[0]?.locationName}</h1>
                <h2>{TrainService?.platform}</h2>
            </div>
    
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Calling at</th>
                        <th>Arrival</th>
                    </tr>
                </thead>
                <tbody>
                    {TrainService?.subsequentCallingPoints && TrainService?.subsequentCallingPoints[0]?.callingPoint?.map((station) => (
                        
                        <tr className="outline-dashed outline-red-500" key={station.locationName}>
                            <td>{station.locationName}</td>
                            <td>{callingPointArrival(station)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <label typeof="text"></label>
        </div>
    );
}