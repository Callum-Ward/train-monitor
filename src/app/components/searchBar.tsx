import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { Button, FormControl, TextField, Grid, Box } from '@material-ui/core';

const searchBar = () => {

    const [data, setData] = useState(null);
    const [stationName, setStationName] = useState('');
    const [isLoading, setLoading] = useState(false)


    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`/api/data?crs=${stationName}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                setLoading(false);
            });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSearch} style={{ width: '20%' }} >
                <TextField
                    label="Enter Station Name"
                    value={stationName}
                    onChange={(e) => setStationName(e.target.value)}
                    style={{ width: '100%' }}
                    InputLabelProps={{ style: { width: '100%', textAlign: 'center' } }}
                    inputProps={{ style: { width: '100%', textAlign: 'center' } }}
                />
                <input type="submit" style={{ display: 'none' }} />
            </form>
        </div>
    )

}


