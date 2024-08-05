// store.js
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {moviesApi} from '../api/movies.ts';
import createDebugger from 'redux-flipper';

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
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

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
