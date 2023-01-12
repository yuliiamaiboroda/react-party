import React, { useState, useEffect } from 'react';
import Chart from 'components/Chart/Chart';
import Table from 'components/Table/Table';
import {
  Title,
  Wrapper,
  DropdownWrapper,
  TableWrapper,
  Option,
  Select,
  SelWrap,
} from './DiagramTab.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactionSummary } from 'redux/transactionSummaryController/transactionSummary-selectors';
import { getTransactionSummary } from 'redux/transactionSummaryController/transactionSummary-operations';

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

  const handleSelectChange = e => {
    if (e.target.name === 'month') {
      setSelectedMonth(e.target.value);
    }
    if (e.target.name === 'year') {
      setSelectedYear(e.target.value);
    }
  };

  return (
    <>
      <Title>Statistics</Title>
      <Wrapper>
        {transactionSummary && (
          <Chart datas={transactionSummary} colors={colors} balance={balanceUserMoney} />
        )}
        <TableWrapper>
          <DropdownWrapper>
            <SelWrap>
              <Select
                value={selectedMonth}
                name="month"
                onChange={handleSelectChange}
              >
                <Option value="1">January</Option>
                <Option value="2">February</Option>
                <Option value="3">March</Option>
                <Option value="4">April</Option>
                <Option value="5">May</Option>
                <Option value="6">June</Option>
                <Option value="7">July</Option>
                <Option value="8">August</Option>
                <Option value="9">September</Option>
                <Option value="10">October</Option>
                <Option value="11">November </Option>
                <Option value="12">December </Option>
              </Select>
            </SelWrap>
            <SelWrap>
              <Select
                value={selectedYear}
                name="year"
                onChange={handleSelectChange}
              >
                <Option value="2019">2019</Option>
                <Option value="2020">2020</Option>
                <Option value="2021">2021</Option>
                <Option value="2022">2022</Option>
                <Option value="2023">2023</Option>
              </Select>
            </SelWrap>
          </DropdownWrapper>
          {transactionSummary && (
            <Table data={transactionSummary} colors={colors} />
          )}
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default DiagramTab;
