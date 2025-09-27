import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { eventsReducer } from '../features/events/EventsSlice';
import { storiesReducer } from '../features/stories/StoriesSlice';



export const store = configureStore({
  reducer: {
    events: eventsReducer,
    stories: storiesReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

