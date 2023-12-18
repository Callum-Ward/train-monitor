import React from "react";
import NewBoardEntry from "./NewBoardEntry";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));


export default function NewBoard({JsonTrainData}) {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-start">
                
                    {JsonTrainData.trainServices.map((trainService) => (
                        <Grid item xs={12} sm={6} md={4} key={trainService}>
                            <NewBoardEntry TrainService={trainService} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );

}