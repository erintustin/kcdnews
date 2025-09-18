import { SKILLS } from '../../app/assets/data/SKILLS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    skillsArray: SKILLS
};

const skillsSlice = createSlice({
    name: 'skills',
    initialState
});

export const skillsReducer = skillsSlice.reducer;

export const selectAllSkills = (state) => {
    return state.skills.skillsArray;
};