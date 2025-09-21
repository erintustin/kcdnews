import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { eventsReducer } from '../features/events/EventsSlice';
import { skillsReducer } from '../features/skills/SkillsSlice';



export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    events: eventsReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

