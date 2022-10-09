import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { catchError, of } from 'rxjs';

import { actions, epics as authEpics } from '~/data/entities/auth';
import { go, routes } from '~/helpers/routing';

import type { AppState, Epic } from './store.types';
import type { Action } from '@reduxjs/toolkit';

const epics: Epic = (action$, store$, dependencies) =>
  combineEpics(authEpics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      if (error.response?.status === 401) {
        go(routes.signIn);
        return of(actions.setLoading(true));
      } else {
        console.error(error);
        return source;
      }
    })
  );

export const middleware = createEpicMiddleware<Action, Action, AppState>();

export const run = () => middleware.run(epics);
