export const formatNumber = (value: number) => {
  if (value >= 1000000) {
    return '999k+';
  }

  if (value >= 100000) {
    return `${Math.floor(value / 1000)}k`;
  }

  if (value >= 1000) {
    const numberFormat = new Intl.NumberFormat('ru-RU');
    return `${numberFormat.format(value)}`;
  }

  return `${value}`;
};
