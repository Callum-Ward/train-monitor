'use client'

import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, TextField, Grid, Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import BasicBoard from '../components/basic-board/BasicBoard';
import JsonBoard from '../components/json-board/JsonBoard';
import NewBoard from '../components/new-board/NewBoard';
import { classicNameResolver } from 'typescript';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  button : {
    color : 'black'
  },
  centeredPlaceholder: {
    '&::placeholder': {
      textAlign: 'center',
    },
  },
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
      <h1>Client Side Rendering Page</h1>
      <div>
        <p>Using new app router to manually fetch data from server</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          label="Enter Station Name"
          value={stationName}
          onChange={(e) => setStationName(e.target.value)}
          style={{ width: '25%' }}
          InputLabelProps={{ style: { width: '100%', textAlign: 'center' } }}
        />
      </div>

      <FormControl>

      </FormControl>

      <Grid container justifyContent='center' spacing={6}>
        <Grid item>
          <Button onClick={() => setBoardType(board.json)}>Json</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setBoardType(board.basic)}>Basic</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setBoardType(board.new)}>New</Button>
        </Grid>
      </Grid>
      <div>
        {renderBoard()}
      </div>

  
    </div>
  );
}