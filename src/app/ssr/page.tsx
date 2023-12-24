import React from "react";
import fetchTrainData from '../api/train';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, TextField, Grid, Divider } from '@material-ui/core';

//Currently no way to access query params server side


export default async function Page() {
    
    const trainData = await fetchTrainData("WOK")

    //TODO implement TrainBoard component to display train data
    return (
        <div>
            <pre>{JSON.stringify(trainData, null, 2)}</pre>
        </div>
    );
}

