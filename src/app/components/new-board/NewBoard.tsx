import React from "react";
import NewBoardEntry from "./NewBoardEntry";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    gridItem: {
        minWidth: 'fit-content',
    },
}));


export default function NewBoard({JsonTrainData}) {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start">
                
                    {JsonTrainData.trainServices?.map(trainService => (
                        trainService?.subsequentCallingPoints ? (
                            <Grid item xs={12} sm={6} md={2} className={classes.gridItem} key={trainService}>
                                <NewBoardEntry TrainService={trainService} />
                            </Grid>
                        ) : null
                    ))}
            </Grid>
        </div>
    );

}