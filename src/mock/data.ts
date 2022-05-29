import { v4 as uuid } from 'uuid';

export const mockData = [
  {
    id: uuid(),
    title: 'Backlog',
    order: 1,
    children: [
      {
        id: uuid(),
        title: uuid(),
      },
      {
        id: uuid(),
        title: uuid(),
      },
      {
        id: uuid(),
        title: uuid(),
      },
    ],
  },
  {
    id: uuid(),
    title: 'To do',
    order: 2,
    children: [
      {
        id: uuid(),
        title: uuid(),
      },
      {
        id: uuid(),
        title: uuid(),
      },
      {
        id: uuid(),
        title: uuid(),
      },
      {
        id: uuid(),
        title: uuid(),
      },
    ],
  },
  {
    id: uuid(),
    title: 'In Progress',
    order: 3,
    children: [
      {
        id: uuid(),
        title: uuid(),
      },
    ],
  },
  {
    id: uuid(),
    title: 'In Code Review',
    order: 4,
    children: [
      {
        id: uuid(),
        title: uuid(),
      },
    ],
  },
  {
    id: uuid(),
    title: 'Testing',
    order: 5,
    children: [
      {
        id: uuid(),
        title: uuid(),
      },
      {
        id: uuid(),
        title: uuid(),
      },
    ],
  },

  {
    id: uuid(),
    title: 'Done',
    order: 6,
    children: [
      {
        id: uuid(),
        title: uuid(),
      },
      {
        id: uuid(),
        title: uuid(),
      },
    ],
  },
]
