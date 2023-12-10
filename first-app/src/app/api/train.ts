//Darwin API: Live Arrival and Departure Boards
import { promises as fs } from 'fs';

export default async function fetchTrainData(crs: string) {

    try {
        const apiKey = process.env.TRAINLINE_API_KEY;

        console.log('fetch crs: ' + crs)
        // Define your query parameters
        const crsValue = 'WAT';
        const numRows = 10;
        const filterCrs = 'null';
        const filterType = 'to';
        const timeOffset = 0;
        const timeWindow = 120;

        // Construct the URL with template literals
        const url = `https://api1.raildata.org.uk/1010-live-arrival-and-departure-boards-arr-and-dep/LDBWS/api/20220120/GetArrDepBoardWithDetails/${crs}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-apikey': `${apiKey}` // replace with your API key
            }
        });
        if (!response.ok) {
            //if api isn't working fetch a local outdated json capture as backup
            const file = await fs.readFile(process.cwd() + '/src/app/api/train-arr-dep-details.json', 'utf8');
            const data = JSON.parse(file);
            console.log('Station request ' + crs + ' failed')
            return data;
            //throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('RESPONSE crs: ' + data.crs)
        return data;
        
    } catch (error) {
        console.error('Error fetching train data:');
        throw error;
    }
}

