'use client'

import { useState, useEffect } from 'react';
import BasicBoard from '../components/BasicBoard';
import JsonBoard from '../components/JsonBoard';
import NewBoard from '../components/NewBoardEntry';

enum board  {
  json,
  basic,
  new
}

export default function Page() {
  // Define a state variable to store the data
  const [data, setData] = useState(null);
  const [stationName, setStationName] = useState('');
  const [isLoading, setLoading] = useState(false)
  const [boardType, setBoardType] = useState(board.json)


  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`/api/data?crs=${stationName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
    });
  };

  const renderBoard = () => {
    if (data) {
      switch(boardType) {
        case board.json:
          return <JsonBoard JsonData={data}/> 
        case board.basic:
          return <BasicBoard JsonData={data}/>
        case board.new:
          return <NewBoard JsonData={data}/>
      }
    }


  }

  
  console.log(data)

  // Render data
  return (
    <div>
      <h1>Client Side Rendering Page</h1>
      <div>
        <p>Using new app router to manually fetch data from server</p>
      </div>
      
      <form onSubmit={handleSearch}>
        <label>
          Enter Station Name:
          <div>
            <input
            type="text"
            value={stationName}
            className="text-black border border-gray-300 px-2 py-1 rounded"
            onChange={(e) => setStationName(e.target.value)}
            />
          </div>
        </label>
        <button type="submit">Search</button>
      </form>

      <div>
        <div>
          <button className='' onClick={() => setBoardType(board.json)}>Json</button>
        </div>
        <div>
          <button onClick={() => setBoardType(board.basic)}>Basic</button>
        </div>
        <div>
          <button onClick={() => setBoardType(board.new)}>New</button>
        </div>
      </div>
      <div>
        {renderBoard()}
      </div>

  
    </div>
  );
}