import React from "react";
import NewBoardEntry from "./NewBoardEntry";

export default function NewBoard({JsonTrainData}) {

    return(
        <div className="grid grid-cols-5 gap-4">
            {JsonTrainData.trainServices.map((trainService) => (
                <NewBoardEntry TrainService={trainService} />
            ))}
        </div>
    );

}