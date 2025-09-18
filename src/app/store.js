import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { projectsReducer } from '../features/projects/ProjectsSlice';
import { skillsReducer } from '../features/skills/SkillsSlice';



export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

