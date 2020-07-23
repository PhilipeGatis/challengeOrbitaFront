import React from 'react';
import clsx from 'clsx';

const translation = {
  payed: 'Pago',
  delayed: 'Em Atraso',
  open: 'Aberto',
}

const Status = ({ status }) => {
  return (
    <span
      className={clsx('absolute top-0 right-0 text-white px-2 rounded mt-4 mr-2 text-xs', {
        'bg-green-500': status === 'payed',
        'bg-red-500': status === 'delayed',
        'bg-purple-500': status === 'open',
      })}
    >
      {translation[status]}
    </span>
  );
};

export default Status;
