import React, { useState, useEffect } from 'react';
import Chart from 'components/Chart';
import Table from 'components/Table';
import {
  Title,
  Wrapper,
  DropdownWrapper,
  TableWrapper,
  Div,
} from './DiagramTab.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactionSummary } from 'redux/transactionSummaryController/transactionSummary-selectors';
import { getTransactionSummary } from 'redux/transactionSummaryController/transactionSummary-operations';
import TableSelectMonth from 'components/TableSelect/TableSelectMonth';
import TableSelectYear from 'components/TableSelect/TableSelectYear';

const colors = [
  '#FED037',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
  '#14EA88',
  '#80B189',
  '#DEDD98',
  '#C5B070',
  '#CF89C1',
];

const DiagramTab = () => {
  const transactionSummary = useSelector(selectTransactionSummary);
  const balanceUserMoney = useSelector(state => state.finance.totalBalance);

  const [selectedMonth, setSelectedMonth] = useState('1');
  const [selectedYear, setSelectedYear] = useState('2023');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getTransactionSummary({
        month: Number(selectedMonth),
        year: Number(selectedYear),
      })
    );
  }, [dispatch, selectedMonth, selectedYear]);

  return (
    <>
      <Div>
        <Title>Statistics</Title>
        <Wrapper>
          {transactionSummary && (
            <Chart
              datas={transactionSummary}
              colors={colors}
              balance={balanceUserMoney}
            />
          )}
          <TableWrapper>
            <DropdownWrapper>
              <TableSelectMonth
                onSelect={option => setSelectedMonth(option.value)}
                defaultValue={selectedMonth}
              />
              <TableSelectYear
                onSelect={option => setSelectedYear(option.value)}
                defaultValue={selectedYear}
              />
            </DropdownWrapper>
            {transactionSummary && (
              <Table data={transactionSummary} colors={colors} />
            )}
          </TableWrapper>
        </Wrapper>
      </Div>
    </>
  );
};

export default DiagramTab;