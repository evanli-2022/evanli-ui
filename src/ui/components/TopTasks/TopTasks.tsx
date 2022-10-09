import React from 'react';

import { Task } from '~/ui/components/Task';
import type { TaskProps } from '~/ui/components/Task';
import { TopActivity } from '~/ui/components/TopActivity';
import type { TopActivityProps } from '~/ui/components/TopActivity';

import tasks from './tasks.mock.json';

const help: TopActivityProps['help'] = {
  title: 'Что такое Задания?',
  content:
    'Задания - это активность, которая позволяет Вам зарабатывать криптомонеты, выполняя условия и получая подтверждение от HR-специалиста.',
};

export const TopTasks = () => (
  <TopActivity title='Задания' help={help}>
    {(tasks as TaskProps['task'][]).map((task, i) => (
      <Task key={i} task={task} />
    ))}
  </TopActivity>
);
