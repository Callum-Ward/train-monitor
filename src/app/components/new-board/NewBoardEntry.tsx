import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import {RootTrainObject} from "../../api/trainDataType";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    card: {
        backgroundColor: '#f5f5f5',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }, 
    typographySection: {
        backgroundColor: (props: {isCancelled: boolean}) =>
            props.isCancelled ? '#ff0000' : '#2196f3', // Red for canceled, blue otherwise
        color: '#ffffff', // Customize the text color
        padding: theme.spacing(2), // Add padding to the typography section
    },
}));

export default function NewBoardEntry({TrainService}) {

    const arrivalTime = () => {
        const noArrival = "None"
        if (!TrainService.sta) return noArrival
        if (!TrainService.eta) return noArrival
        if (TrainService.eta == "On time") return TrainService.std
        return TrainService.eta
    }

    const callingPointArrival = (station) => {
        const noArrival = "None"
        if (!station.st) return noArrival
        if (station.et == "On time") return station.st
        return station.et
    }

    const classes = useStyles({isCancelled: TrainService?.isCancelled});

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.typographySection}>
                        <Typography variant="h4">{arrivalTime()}</Typography>
                        <Typography variant="h5">{TrainService?.destination[0]?.locationName}</Typography>
                        <Typography variant="subtitle1">Platform: {TrainService?.platform}</Typography>
                    </div>

                
        
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Calling at</TableCell>
                                <TableCell>Arrival</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TrainService?.subsequentCallingPoints?.[0]?.callingPoint?.map((station) => (
                                <TableRow key={station.locationName}>
                                    <TableCell>{station.locationName}</TableCell>
                                    <TableCell>{callingPointArrival(station)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}