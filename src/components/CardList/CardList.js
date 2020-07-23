import React from 'react';
import Card from '../Card';
import { parseISO } from 'date-fns';

const data = [
  {
    id: 1,
    status: 'delayed',
    expenditureDate: parseISO('2020-12-01T00:00:00.000Z'),
    expenditure: '2.377',
    cost: '41,19',
    dueDate: parseISO('2020-01-05T00:00:00.000Z'),
  },
  {
    id: 2,
    status: 'payed',
    expenditureDate: parseISO('2020-02-01T00:00:00.000Z'),
    expenditure: '2.000',
    cost: '41,19',
    dueDate: parseISO('2020-03-05T00:00:00.000Z'),
  },
  {
    id: 3,
    status: 'open',
    expenditureDate: parseISO('2020-03-01T00:00:00.000Z'),
    expenditure: '300',
    cost: '41,19',
    dueDate: parseISO('2020-04-05T00:00:00.000Z'),
  },
];

const CardList = () => {
  return (
    <div className="card-list flex overflow-auto px-10">
      {data.map((data, i) => (
        <Card key={i} data={data} />
      ))}
      <div className="w-10 flex-shrink-0" />
    </div>
  );
};

export default CardList;
