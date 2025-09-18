import { PROJECTS } from '../../app/assets/data/PROJECTS';
import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    projectsArray: PROJECTS
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState
});

export const projectsReducer = projectsSlice.reducer;

export const selectAllProjects = (state) => {
    return state.projects.projectsArray;
};

export const selectProjectByName = (name) => (state) => {
    return state.projects.projectsArray.find(
        (project) => project.name === name
    );
};