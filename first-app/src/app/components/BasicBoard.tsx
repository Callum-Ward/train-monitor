import React from "react";

interface JsonBoardProps {
    data: {}; // replace 'any' with the actual type of your data
  }
  


export default function BasicBoard({JsonData}) {

    return (
        <div>
            <pre>{data ? JSON.stringify(data, null, 2) : ''}</pre>
        </div>
    );
}
