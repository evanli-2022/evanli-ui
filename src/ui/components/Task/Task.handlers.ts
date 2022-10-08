import { useNavigate } from 'react-router-dom';

import { routes } from '~/helpers/routing';

import type { Task } from './Task.types';

export const useHandlers = () => {
  const navigate = useNavigate();

  const handleStartTask = (type: Task['type']) => {
    switch (type) {
      case 'profile':
        navigate(routes.main.profile);
        break;

      case 'test':
        alert('Здесь будет переход к тестированию');
        break;

      case 'learning':
        alert('Здесь будет переход к обучению');
        break;
    }
  };

  return { handleStartTask };
};
