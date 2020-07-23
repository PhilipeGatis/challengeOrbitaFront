import React from 'react';
import clsx from 'clsx';

const Price = ({ cost, status }) => {
  return (
    <div className="space-x-1 inline-block align-baseline">
      <span className="text-xs">R$</span>
      <span
        className={clsx('inline-block align-baseline text-base font-medium', {
          'text-green-500': status === 'payed',
          'text-red-500': status === 'delayed',
          'text-purple-500': status === 'open',
        })}
      >
        {cost}
      </span>
    </div>
  );
};

export default Price;
