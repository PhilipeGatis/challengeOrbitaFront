import React from 'react';

const Actions = ({ status }) => {
  return (
    <div className="text-right pr-2">
      {status === 'delayed' && <span className="text-green-500 text-sm text-right">EFETUAR PAGAMENTO</span>}
    </div>
  );
};

export default Actions;
