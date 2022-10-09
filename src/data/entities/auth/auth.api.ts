import { map } from 'rxjs';

import { API } from '~/services/API';

import type { Requests, Responses } from './auth.types';

export const api = new API('/auth');

export const signIn = (params: Requests.Auth) =>
  api.POST$<Responses.Auth>('/signin', undefined, { params }).pipe(map(response => response.data));
