import React from "react";
import NewBoardEntry from "./NewBoardEntry";
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const GridItem = styled(Grid)(({ theme }) => ({
  minWidth: 'fit-content',
}));


export default function NewBoard({JsonTrainData}) {

    return(
        <Root>
        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start">
          {JsonTrainData.trainServices?.map(trainService => (
            trainService?.subsequentCallingPoints ? (
              <GridItem item xs={12} sm={6} md={2} key={trainService}>
                <NewBoardEntry TrainService={trainService} />
              </GridItem>
            ) : null
          ))}
        </Grid>
      </Root>      
    );

}