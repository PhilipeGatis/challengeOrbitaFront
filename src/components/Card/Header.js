import React from 'react';
import format from 'date-fns/format';

const Header = ({ date }) => {
  return (
    <div className="space-x-2">
      <span className="inline-block align-baseline text-base">Fatura</span>
      <span className="inline-block align-baseline text-sm">{format(date, 'MMM yy')}</span>
    </div>
  );
};

export default Header;
