import React from 'react';

const Table = ({ data, colors }) => {
  return (
    <ul>
      {data.map((el, index) => (
        <li
          key={el.id}
          style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>{colors.find((_, ind) => index === ind)}</span>
          <p>{el.comment}-</p>
          <p>{el.amount}</p>
        </li>
      ))}
    </ul>
  );
};

export default Table;
