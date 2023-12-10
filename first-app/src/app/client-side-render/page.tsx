'use client'

import { useState, useEffect } from 'react';

export default function Page() {
  // Define a state variable to store the data
  const [data, setData] = useState(null);
  const [stationName, setStationName] = useState('');
  const [isLoading, setLoading] = useState(true)

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`/api/data?crs=${stationName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
    });

  };
  console.log(data)
  //if (isLoading) return <p>Loading...</p>
  //if (!data) return <p>No profile data</p>

  // Render data
  return (
    <div>
      <h1>Client Side Rendering Page</h1>
      <p>Using new app router to manually fetch data from server</p>
      <form onSubmit={handleSearch}>
        <label>
          Enter Station Name:
          <input
            type="text"
            value={stationName}
            className="text-black border border-gray-300 px-2 py-1 rounded"
            onChange={(e) => setStationName(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
        <pre>{data ? JSON.stringify(data, null, 2) : ''}</pre>
    </div>
  );
}