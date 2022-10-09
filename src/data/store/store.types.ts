import type { AuthState } from '~/data/entities/auth';

import type { Action } from 'redux';
import type { Epic as LibEpic } from 'redux-observable';

export type AppState = {
  auth: AuthState;
};

export type Epic = LibEpic<Action, Action, AppState>;
