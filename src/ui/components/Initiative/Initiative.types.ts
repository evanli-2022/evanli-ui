export type Initiative = {
  title: string;
  description: string;
  current: number;
  limit: number;
};

export type InitiativeProps = {
  initiative: Initiative;
};
