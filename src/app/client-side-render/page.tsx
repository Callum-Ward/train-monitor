'use client'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, TextField, Grid, Divider } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { useState, useEffect } from 'react';
import BasicBoard from '../components/basic-board/BasicBoard';
import JsonBoard from '../components/json-board/JsonBoard';
import NewBoard from '../components/new-board/NewBoard';
import { classicNameResolver } from 'typescript';

const theme = createTheme({
  typography: {
    fontFamily: 'ubuntu, Arial, sans-serif',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  boardButtons : {
    fontWeight : 'bold'
  }
}));

enum board  {
  json,
  basic,
  new
}

export default function Page() {
  // Define a state variable to store the data
  const [data, setData] = useState(null);
  const [stationName, setStationName] = useState('');
  const [isLoading, setLoading] = useState(false)
  const [boardType, setBoardType] = useState(board.json)

  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`/api/data?crs=${stationName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
    });
  };

  const renderBoard = () => {
    if (data) {
      switch(boardType) {
        case board.json:
          return <JsonBoard JsonTrainData={data}/> 
        case board.basic:
          return <BasicBoard JsonTrainData={data}/>
        case board.new:
          return <NewBoard JsonTrainData={data}/>
      }
    }
  }

  // Render data
  return (
    <div>
      <ThemeProvider theme={theme}>

      <Typography variant="h4" align="center" style={{marginTop : '10px' , marginBottom : '10px'}}>Client Side Rendering Page</Typography>
      <Divider></Divider>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
        <form onSubmit={handleSearch} style={{ width: '20%' }} >
          <TextField
            label="Enter Station Name"
            value={stationName}
            onChange={(e) => setStationName(e.target.value)}
            style={{ width: '100%'}}
            InputLabelProps={{ style: { width: '100%', textAlign: 'center' }}}
            margin='dense'
            
            inputProps={{style: {width:'100%', textAlign: 'center'} }}
          />
          <input type="submit" style={{ display: 'none' }} />
        </form>
      </div>

      <Grid container justifyContent='center' spacing={10} className={classes.boardButtons} style={{}} >
        <Grid item>
          <Button className={classes.boardButtons} onClick={() => setBoardType(board.json)}>Json</Button>
        </Grid>
        <Grid item>
          <Button className={classes.boardButtons} onClick={() => setBoardType(board.basic)}>Basic</Button>
        </Grid>
        <Grid item>
          <Button className={classes.boardButtons} onClick={() => setBoardType(board.new)}>New</Button>
        </Grid>
      </Grid>
      <div>
        {renderBoard()}
      </div>

      </ThemeProvider>
    </div>
  );
}