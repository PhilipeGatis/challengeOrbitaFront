import React from 'react';
import Header from './Header';
import DueDate from './DueDate';
import Price from './Price';
import Status from './Status';
import Expenditure from './Expenditure';
import Actions from './Actions';

const Card = ({ data }) => {
  return (
    <a href={`#${data.id}`} id={data.id} className="card h-64 w-11/12 m-2">
      <div className="flex flex-col w-full relative pt-2 pl-2">
        <Status status={data.status} />
        <div className="flex-1 w-full">
          <Header date={data.expenditureDate} />
        </div>
        <div className="pt-2 pl-2">
          <div className="pt-10">
            <Expenditure expenditure={data.expenditure} />
            <Price cost={data.cost} status={data.status} />
          </div>
          <div className="pt-10">
            <DueDate dueDate={data.dueDate} />
          </div>
        </div>
        <div className="flex-1 w-full">
          <Actions status={data.status} />
        </div>
      </div>
    </a>
  );
};

export default Card;
