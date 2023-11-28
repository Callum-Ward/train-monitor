import React from "react";
import { fetchTrainData } from '../api/train';


export default async function Page() {
    const trainData = await fetchTrainData("WOK")

    //TODO implement TrainBoard component to display train data
    return (
        <div>
            <pre>{JSON.stringify(trainData, null, 2)}</pre>
        </div>
    );
}