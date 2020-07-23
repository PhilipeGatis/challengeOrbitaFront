import React from 'react';
import { format } from 'date-fns';

const DueDate = ({ dueDate }) => {
  return (
    <>
      <div className="">
        <span className="inline-block align-baseline text-sm">Vencimento</span>
      </div>
      <div className="space-x-1">
        <span className="inline-block align-baseline text-base">{format(dueDate, 'dd/MM')}</span>
        <span className="inline-block align-baseline text-xs">{format(dueDate, 'EEEE')}</span>
      </div>
    </>
  );
};

export default DueDate;
