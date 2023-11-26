//Darwin API: Live Arrival and Departure Boards

import axios from 'axios';


export async function fetchTrainData(Crs: string) {

    try {
        const apiKey = process.env.TRAINLINE_API_KEY;

        console.log(Crs)
        // Define your query parameters
        const crsValue = 'WAT';
        const numRows = 10;
        const filterCrs = 'null';
        const filterType = 'to';
        const timeOffset = 0;
        const timeWindow = 120;

        // Construct the URL with template literals
        const url = `https://api1.raildata.org.uk/1010-live-arrival-and-departure-boards-arr-and-dep/LDBWS/api/20220120/GetArrDepBoardWithDetails/${crsValue}`;

        const response = await axios.get(url, {
            headers: {
                'x-apikey': apiKey,
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            return response.data; // Return the JSON data
        } else {
            throw new Error(`API request failed with status ${response.status}`);
        }  
    } catch (error) {
        console.error('Error fetching train data:');
        throw error;
    }
}

