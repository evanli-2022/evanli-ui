import React from 'react';

import { Initiative } from '~/ui/components/Initiative';
import type { InitiativeProps } from '~/ui/components/Initiative';
import { TopActivity } from '~/ui/components/TopActivity';
import type { TopActivityProps } from '~/ui/components/TopActivity';

import initiatives from './initiatives.mock.json';

const help: TopActivityProps['help'] = {
  title: 'Что такое Инициатива?',
  content:
    'Инициатива - это активность, в рамках которой сотрудник компании предлагает организацию какого-либо мероприятия при достижении опреденной суммы, а коллеги путем внесения криптомонет поддерживают данное начинание. Механизм схож с краудфандингом.',
};

export const TopInitiatives = () => (
  <TopActivity title='Инициативы' help={help}>
    {(initiatives as InitiativeProps['initiative'][]).map((initiative, i) => (
      <Initiative key={i} initiative={initiative} />
    ))}
  </TopActivity>
);
