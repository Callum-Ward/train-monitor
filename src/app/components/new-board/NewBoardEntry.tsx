import React from "react";
import {RootTrainObject} from "../../api/trainDataType";


export default function NewBoardEntry({TrainService}) {
    console.log('TrainService' + TrainService)
    const destination = () => {
        const noDestination = "None"
        if (!TrainService.destination) return noDestination
        if (!TrainService.destination[0]) return noDestination
        if (!TrainService.destination[0].locationName) return noDestination
        return TrainService.destination[0].locationName
    }

    const arrivalTime = () => {
        const noArrival = "None"
        if (!TrainService.sta) return noArrival
        if (!TrainService.eta) return noArrival
        if (TrainService.eta == "On time") return TrainService.std
        return TrainService.eta
    }

    const platform = () => {
        const noPlatform = "None"
        if (!TrainService.platform) return noPlatform
        return TrainService.platform
    }

    const callingPointArrival = (station) => {
        const noArrival = "None"
        if (!station.callingPoint.st) return noArrival
        if (station.callingPoint.et != "On time") return station.callingPoint.st
        return station.callingPoint.et
    }


    return (
        <div>
            <div>
                <h1>{arrivalTime()}</h1>
                <h1>{destination()}</h1>
                <h2>{platform()}</h2>
            </div>
    
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Calling at</th>
                        <th>Arrival</th>
                    </tr>
                </thead>
                <tbody>
                    {TrainService?.subsequentCallingPoints?.map((station) => (
                        <tr key={station.callingPoint[0].locationName}>
                            <td>{station.callingPoint[0].locationName}</td>
                            <td>{callingPointArrival(station)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <label typeof="text"></label>
        </div>
    );
}