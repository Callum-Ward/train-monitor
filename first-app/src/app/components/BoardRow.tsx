import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

function DestinationColumn({children} : Props) {
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