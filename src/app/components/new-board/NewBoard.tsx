import React from "react";
import NewBoardEntry from "./NewBoardEntry";

export default function NewBoard({JsonTrainData}) {

    return(
        <div>
            {JsonTrainData.trainServices.map((trainService) => (
                <NewBoardEntry TrainService={trainService} />
            ))}
        </div>
    );

}