import React from "react";

export default function JsonBoard({JsonTrainData}) {

    return (
        <div>
            <pre>{JsonTrainData ? JSON.stringify(JsonTrainData, null, 2) : ''}</pre>
        </div>
    );
}

