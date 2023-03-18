import { createSlice } from "@reduxjs/toolkit";

const unitsSlice = createSlice({
    name: 'units',
    initialState: 'standard',
    reducers: {
        setUnit: (state, {payload}) => {
            console.log(payload);
            return payload === 'standard' ? 'imperial' : 'standard'
        }
    }
})

export const { setUnit } = unitsSlice.actions;

export const unitsReducer = unitsSlice.reducer;

export const selectUnits = state => state.units