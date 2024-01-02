'use client'

import { Button, Typography, TextField, Grid, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
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

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const BoardButtons = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
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
    <Root>
      <ThemeProvider theme={theme}>

      <Typography variant="h4" align="center" style={{marginTop : '10px' , marginBottom : '10px'}}>Client Side Rendering Page</Typography>
      <Divider></Divider>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
        <form onSubmit={handleSearch} style={{ width: '20%' }} >
          <TextField
            label="Enter Station Name"
            variant="standard"
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

      <Grid container justifyContent='center' spacing={10} style={{}} >
        <Grid item>
          <BoardButtons onClick={() => setBoardType(board.json)}>Json</BoardButtons>
        </Grid>
        <Grid item>
          <BoardButtons onClick={() => setBoardType(board.basic)}>Basic</BoardButtons>
        </Grid>
        <Grid item>
          <BoardButtons onClick={() => setBoardType(board.new)}>New</BoardButtons>
        </Grid>
      </Grid>
      <div>
        {renderBoard()}
      </div>

      </ThemeProvider>
    </Root>
  );
}
