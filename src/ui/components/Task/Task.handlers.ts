import { useNavigate } from 'react-router-dom';

import { routes } from '~/helpers/routing';

export const useHandlers = () => {
  const navigate = useNavigate();

  return {
    learning: () => alert('Здесь будет переход к заданию'),
    profile: () => navigate(routes.main.profile),
    test: () => alert('Здесь будет переход к заданию'),
  };
};
