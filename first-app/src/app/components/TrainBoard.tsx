import { fetchTrainData } from '../api/train';
import JSONTree from 'react-json-tree';

async function  TrainDataComponent() {

    const trainData = await fetchTrainData("WOK");


    return (
        <div>
            {trainData ? (
                <pre>{JSON.stringify(trainData, null, 2)}</pre>
            ) : (
                <p>Loading train data...</p>
            )}
        </div>
    );
}

export default TrainDataComponent;