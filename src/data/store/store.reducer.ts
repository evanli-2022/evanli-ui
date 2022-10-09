import { combineReducers } from '@reduxjs/toolkit';

import { reducer as auth } from '~/data/entities/auth';

import type { AppState } from './store.types';

export const reducer = combineReducers<AppState>({
  auth,
});
