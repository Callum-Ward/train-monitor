import { ReactNode } from 'react';
import JSONTree from 'react-json-tree';

interface Props {
    children: ReactNode;
}

function TrainBoard({children} : Props) {
    const trainData = children
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

export default TrainBoard;