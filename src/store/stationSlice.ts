import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface RootState {
    station: StationState
}

interface StationState {
    stationFrom: string;
    stationTo: string;
}

const initialState: StationState = {
    stationFrom: '',
    stationTo: '',
};

export const stationSlice = createSlice({
    name: 'station',
    initialState,
    reducers: {
        setStationFrom: (state, action: PayloadAction<string>) => {
            state.stationFrom = action.payload;
        },
        setStationTo: (state, action: PayloadAction<string>) => {
            state.stationTo = action.payload;
        },
    },
});

export const { setStationFrom, setStationTo } = stationSlice.actions;



export default stationSlice.reducer;
