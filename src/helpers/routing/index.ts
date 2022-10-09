export const routes = {
  main: {
    root: '/',
    auctions: 'auctions',
    crowdfunding: 'crowdfunding',
    market: 'market',
    profile: 'profile',
    tasks: 'tasks',
  },
  signIn: '/sign-in',
};

export const go = (path: string) => (window.location.pathname = path);
