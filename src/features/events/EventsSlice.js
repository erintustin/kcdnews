import { EVENTS } from '../../app/assets/data/EVENTS';
import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventsArray: EVENTS
};

const eventsSlice = createSlice({
    name: 'events',
    initialState
});

export const eventsReducer = eventsSlice.reducer;

export const selectAllEvents = (state) => {
    return state.events.eventsArray;
};

export const selectEventByName = (name) => (state) => {
    return state.events.eventsArray.find(
        (event) => event.name === name
    );
};

export const selectEventsByType = (type) => (state) => {
    return state.events.eventsArray.filter(
        (event) => event.type === type
    );
};

export const selectEventByUri = (uri) => (state) => {
    return state.events.eventsArray.find(
        (event) => event.uri === uri
    );
};