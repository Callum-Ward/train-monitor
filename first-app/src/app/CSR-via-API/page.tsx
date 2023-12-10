'use client'

import { useState, useEffect } from 'react';

export default function Page() {
  // Define a state variable to store the data
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)

  // Define an effect hook to fetch the data on mount
  useEffect(() => {
    // Fetch data from your API route
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        })
    }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  // Render data
  return (
    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}