import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name:'users',
    initialState:{
        data: [] // list of users
    },
    reducers:{}
});

export const usersReducer = usersSlice.reducer;
