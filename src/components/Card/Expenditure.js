import React from 'react';

const Expenditure = ({ expenditure }) => {
  return (
    <div className="space-x-1">
      <span className="inline-block align-baseline text-2xl font-medium">{expenditure}</span>
      <span className="inline-block align-baseline text-xs">MB</span>
    </div>
  );
};

export default Expenditure;
