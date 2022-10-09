export interface AuthState {
  error: string;
  loading: boolean;
}

export namespace Requests {
  export interface Auth {
    username: string;
    password: string;
  }
}

export namespace Responses {
  export interface Auth {
    token: string;
  }
}
