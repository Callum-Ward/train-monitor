import React from "react";

export default function JsonBoard({JsonData}) {

    return (
        <div>
            <pre>{JsonData ? JSON.stringify(JsonData, null, 2) : ''}</pre>
        </div>
    );
}

