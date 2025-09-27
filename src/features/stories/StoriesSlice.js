import { STORIES } from '../../app/assets/data/INSTAFEED';
import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    storiesArray: STORIES
};

const storiesSlice = createSlice({
    name: 'stories',
    initialState
});

export const storiesReducer = storiesSlice.reducer;

export const selectAllStories = (state) => {
    return state.stories.storiesArray;
};