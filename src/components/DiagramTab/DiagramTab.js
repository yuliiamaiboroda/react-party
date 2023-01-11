import React, {useState} from 'react';
import Chart from 'components/Chart/Chart';
import Table from 'components/Table/Table';
import {
  Title,
  Wrapper,
  DropdownWrapper,
  TableWrapper,
} from './DiagramTab.styled';

const fakeData = [
  {
    id: 'string',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Education',
    amount: 500.0,
    balanceAfter: 0,
  },
  {
    id: 'string43',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Education',
    amount: 500.0,
    balanceAfter: 0,
  },
  {
    id: 'string2',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Leisure',
    amount: 340.0,
    balanceAfter: 0,
  },
  {
    id: 'string3',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Car',
    amount: 750.0,
    balanceAfter: 0,
  },
  {
    id: 'string4',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'Self care',
    amount: 220.0,
    balanceAfter: 0,
  },
  // {
  //   id: 'string5',
  //   transactionDate: 'string',
  //   type: 'EXPENSE',
  //   categoryId: 'string',
  //   userId: 'string',
  //   comment: 'Pub',
  //   amount: 150.0,
  //   balanceAfter: 0,
  // },
  // {
  //   id: 'string55',
  //   transactionDate: 'string',
  //   type: 'EXPENSE',
  //   categoryId: 'string',
  //   userId: 'string',
  //   comment: '6th',
  //   amount: 330.0,
  //   balanceAfter: 0,
  // },
  // {
  //   id: 'string56',
  //   transactionDate: 'string',
  //   type: 'EXPENSE',
  //   categoryId: 'string',
  //   userId: 'string',
  //   comment: '6th',
  //   amount: 330.0,
  //   balanceAfter: 0,
  // },
  // {
  //   id: 'string57',
  //   transactionDate: 'string',
  //   type: 'EXPENSE',
  //   categoryId: 'string',
  //   userId: 'string',
  //   comment: 'Extra-2',
  //   amount: 330.0,
  //   balanceAfter: 0,
  // },
  // {
  //   id: 'string58',
  //   transactionDate: 'string',
  //   type: 'EXPENSE',
  //   categoryId: 'string',
  //   userId: 'string',
  //   comment: 'Extra',
  //   amount: 200.0,
  //   balanceAfter: 0,
  // },
  // {
  //   id: 'string59',
  //   transactionDate: 'string',
  //   type: 'EXPENSE',
  //   categoryId: 'string',
  //   userId: 'string',
  //   comment: 'Gold',
  //   amount: 200.0,
  //   balanceAfter: 0,
  // },
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
  const [selectedMounth, setSelectedMounth] = useState('january')

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
    <>
      <Title>Statistics</Title>
      <Wrapper>
        <Chart data={data} options={options} />
        <TableWrapper>
          <DropdownWrapper>
            <select>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november ">November </option>
              <option value="december ">December </option>
            </select>
            <select>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </DropdownWrapper>
          <Table data={fakeData} colors={colors} />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default DiagramTab;
