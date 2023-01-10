import React from 'react';
import Chart from 'components/Chart/Chart';
import Table from 'components/Table/Table';

const fakeData = [
  {
    id: 'string',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Education',
    amount: 500,
    balanceAfter: 0,
  },
  {
    id: 'string43',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Education',
    amount: 500,
    balanceAfter: 0,
  },
  {
    id: 'string2',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Leisure',
    amount: 340,
    balanceAfter: 0,
  },
  {
    id: 'string3',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Car',
    amount: 750,
    balanceAfter: 0,
  },
  {
    id: 'string4',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Self care',
    amount: 220,
    balanceAfter: 0,
  },
  {
    id: 'string5',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Pub',
    amount: 150,
    balanceAfter: 0,
  },
  {
    id: 'string55',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: '6th',
    amount: 330,
    balanceAfter: 0,
  },
  {
    id: 'string56',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: '6th',
    amount: 330,
    balanceAfter: 0,
  },
  {
    id: 'string57',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Extra-2',
    amount: 330,
    balanceAfter: 0,
  },
  {
    id: 'string58',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Extra',
    amount: 200,
    balanceAfter: 0,
  },
  {
    id: 'string59',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Gold',
    amount: 200,
    balanceAfter: 0,
  },
];

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
  '#14EA88',
  '#75DE12',
];

const DiagramTab = () => {
  const dataLabels = fakeData.map(el => el.comment);
  const dataAmount = fakeData.map(el => el.amount);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: dataLabels,
    datasets: [
      {
        data: dataAmount,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        gap: '30px',
      }}
    >
      <Chart data={data} options={options} />
      <Table data={fakeData} colors={colors} />
    </div>
  );
};

export default DiagramTab;




// import React from 'react';
// export const colors = [
//     '#FED057',
//     '#FFD8D0',
//     '#FD9498',
//     '#C5BAFF',
//     '#6E78E8',
//     '#4A56E2',
//     '#81E1FF',
//     '#24CCA7',
//     '#00AD84',
//     '#14EA88',
//     '#75DE12',
//   ];
  
//   console.log('colors >>>', colors)
// const Table = () => {
//   return (
//     <ul>
//       {colors.map((el, index) => (
//         <li key={index} style={{
//             width: '200px',
//             display: 'flex',
//             justifyContent: 'space-between'
//           }}>
//             {console.log('index', index)}<span>
//           {colors.filter((_, i) => i === index
//           )}</span>
//           <p>{el.comment}-</p>
//           <p>{el.amount}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default Table;