import { configureStore } from '@reduxjs/toolkit';

import * as epics from './store.epics';
import { reducer } from './store.reducer';

export const createStore = () => {
  const middlewares = [epics.middleware];
  const store = configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(middlewares),
  });

  epics.run();

  return store;
};
