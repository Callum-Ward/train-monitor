import React from "react";
import NewBoardEntry from "./NewBoardEntry";

export default function NewBoard({JsonTrainData}) {
    console.log('New Board')
    console.log(JsonTrainData)
    return(
        <div>
            {JsonTrainData.trainServices.map((trainService) => (
                <NewBoardEntry TrainService={trainService} />
            ))}
        </div>
    );

}