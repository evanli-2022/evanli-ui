import Axios$ from 'axios-observable';

import { Config, Data } from './API.types';

export class API {
  private api$: Axios$;

  public constructor(rootPath: string) {
    this.api$ = Axios$.create({
      baseURL: 'http://146.185.243.90/api/auth' + rootPath,
    });
  }

  private static getAuthToken() {
    return localStorage.getItem('token');
  }

  public static hasAuthToken() {
    return !!API.getAuthToken();
  }

  public static setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  public static removeAuthToken() {
    localStorage.removeItem('token');
  }

  private getConfig = (config: Config = {}): Config => ({
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
      Authorization: 'Bearer ' + API.getAuthToken(),
    },
  });

  public GET$ = <T>(url: string, config?: Config) => this.api$.get<T>(url, this.getConfig(config));

  public POST$ = <T>(url: string, data: Data = {}, config?: Config) =>
    this.api$.post<T>(url, data, this.getConfig(config));

  public PUT$ = <T>(url: string, data: Data = {}, config?: Config) =>
    this.api$.put<T>(url, data, this.getConfig(config));

  public PATCH$ = <T>(url: string, data: Data = {}, config?: Config) =>
    this.api$.patch<T>(url, data, this.getConfig(config));

  public DELETE$ = <T>(url: string, data: Data = {}, config?: Config) =>
    this.api$.delete<T>(url, this.getConfig({ ...config, data }));
}
