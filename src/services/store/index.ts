// store.js
import {configureStore} from '@reduxjs/toolkit';
import {moviesApi} from '../api/movies.ts';
import createDebugger from 'redux-flipper';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware();
    if (__DEV__) {
      // @ts-ignore
      middlewares.push(createDebugger());
    }
    middlewares.push(moviesApi.middleware);
    return middlewares;
  },
});

export default store;
