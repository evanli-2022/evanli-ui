import type { Task } from './Task.types';

export const getPrice = (price: Task['price']) => {
  if (price >= 1000000) {
    return '999k+';
  }

  if (price >= 100000) {
    return `${Math.floor(price / 1000)}k`;
  }

  if (price >= 1000) {
    const numberFormat = new Intl.NumberFormat('ru-RU');
    return `${numberFormat.format(price)}`;
  }

  return `${price}`;
};

export const getButtonText = (type: Task['type']) => {
  switch (type) {
    case 'profile':
      return 'Перейти в профиль';

    case 'test':
      return 'Пройти тест';

    case 'learning':
      return 'Пройти обучение';
  }
};
