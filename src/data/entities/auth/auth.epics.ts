import { combineEpics } from 'redux-observable';
import { filter, map, switchMap } from 'rxjs';

import type { Epic } from '~/data/store';
import { go, routes } from '~/helpers/routing';
import { API } from '~/services/API';

import { actions } from './auth';
import * as authApi from './auth.api';

const signIn: Epic = action$ =>
  action$.pipe(
    filter(actions.signIn.match),
    switchMap(props =>
      authApi.signIn(props.payload).pipe(
        map(({ token }) => {
          API.setAuthToken(token);
          go(routes.main.root);
          return actions.setLoading(true);
        })
      )
    )
  );

const signOut: Epic = action$ =>
  action$.pipe(
    filter(actions.signOut.match),
    map(() => {
      API.removeAuthToken();
      return actions.checkToken();
    })
  );

const checkToken: Epic = action$ =>
  action$.pipe(
    filter(actions.checkToken.match),
    filter(() => !API.hasAuthToken()),
    map(() => {
      go(routes.signIn);
      return actions.setLoading(true);
    })
  );

export const epics = combineEpics(signIn, signOut, checkToken);
