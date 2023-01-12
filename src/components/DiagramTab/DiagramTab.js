import React, { useState, useEffect } from 'react';
import Chart from 'components/Chart/Chart';
import Table from 'components/Table/Table';
import {
  Title,
  Wrapper,
  DropdownWrapper,
  TableWrapper,
  Select,
  SelWrap,
} from './DiagramTab.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactionSummary } from 'redux/transactionSummaryController/transactionSummary-selectors';
import { getTransactionSummary } from 'redux/transactionSummaryController/transactionSummary-operations';

const colors = [
  '#98DE74',
  '#FED037',
  '#FED098',
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
  const transactionSummary = useSelector(selectTransactionSummary);
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
          <Chart datas={transactionSummary} colors={colors} />
        )}
        <TableWrapper>
          <DropdownWrapper>
            <SelWrap>
              <Select
                value={selectedMonth}
                name="month"
                onChange={handleSelectChange}
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November </option>
                <option value="12">December </option>
              </Select>
            </SelWrap>
            <SelWrap>
              <Select
                value={selectedYear}
                name="year"
                onChange={handleSelectChange}
              >
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
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
