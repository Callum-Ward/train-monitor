import React from "react";

interface JsonBoardProps {
    data: {}; // replace 'any' with the actual type of your data
  }
  


export default function BasicBoard({JsonTrainData}) {
    console.log(JsonTrainData.trainServices[0])
    console.log(JsonTrainData.trainServices[0])
    return (
        <div>
            <pre>{JsonTrainData.trainServices[0] ? JSON.stringify(JsonTrainData.trainServices[0], null, 2) : ''}</pre>
        </div>
    );
}
