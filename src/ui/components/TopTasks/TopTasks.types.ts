export type Task = {
  type: 'learning' | 'profile' | 'test';
  title: string;
  description: string;
  price: number;
};
