//Darwin API: Live Arrival and Departure Boards
import { promises as fs } from 'fs';

var called = 0

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
        const path = process.cwd() + '/src/app/api/stored/train-arr-dep-details.json'
        if (!response.ok) {
            //if api isn't working fetch a local outdated json capture as backup
            const file = await fs.readFile(path, 'utf8');
            const data = JSON.parse(file);
            console.log('Station request ' + crs + ' failed')
            return data;
            //throw new Error(`HTTP error! status: ${response.status}`);
        }
        //Return to const when finished testing
        var data = await response.json();
        
        console.log('called ' + called++ + ' times');
        const write = await fs.writeFile(path, JSON.stringify(data, null, 2));
        console.log('RESPONSE crs: ' + data.crs);
       //data = {a:called}
        return data;
        
    } catch (error) {
        console.error('Error fetching train data:');
        throw error;
    }
}

