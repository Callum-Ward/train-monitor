import React from "react";
import { Card, CardContent, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import {RootTrainObject} from "../../api/trainDataType";
import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

interface TypographySectionProps {
    isCancelled: boolean;
  }
  
  const TypographySection = styled('div')<TypographySectionProps>(({ theme, isCancelled }) => ({
    backgroundColor: isCancelled ? '#ff0000' : '#2196f3', // Red for canceled, blue otherwise
    color: '#ffffff', // Customize the text color
    padding: theme.spacing(2), // Add padding to the typography section
  }));

const BoldHeader = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
}));

export default function NewBoardEntry({TrainService}) {
  const arrivalTime = () => {
    const noArrival = "None"
    if  (TrainService?.etd == "On time") return TrainService?.std
    if (TrainService?.etd) return TrainService.etd
    if (TrainService?.eta == "On time") return TrainService?.sta
    if (TrainService?.eta) return TrainService.eta
    return noArrival
  }

  const callingPointArrival = (station) => {
    const noArrival = "None"
    if (!station.st) return noArrival
    if (station.et == "On time") return station.st
    return station.et
  }

  return (
    <Root>
      <CardStyled>
        <CardContent>
          <TypographySection isCancelled={TrainService?.isCancelled}>
            <Typography variant="h4">{arrivalTime()}</Typography>
            <Typography variant="h5">{TrainService?.destination[0]?.locationName}</Typography>
            <Typography variant="subtitle1">Platform: {TrainService?.platform}</Typography>
          </TypographySection>

          <Table>
            <TableHead>
              <TableRow>
                <BoldHeader>Calling at</BoldHeader>
                <BoldHeader>Arrival</BoldHeader>
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
      </CardStyled>
    </Root>
  );
}