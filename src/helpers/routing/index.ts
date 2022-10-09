export const routes = {
  main: {
    root: '/',
    auctions: 'auctions',
    initiatives: 'initiatives',
    market: 'market',
    profile: 'profile',
    tasks: 'tasks',
  },
  signIn: '/sign-in',
};

export const go = (path: string) => (window.location.pathname = path);
