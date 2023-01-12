import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Wrapper } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ datas, colors }) => {
  const { categoriesSummary } = datas;

  const onlyExpenses = categoriesSummary.filter(trans => trans.type === 'EXPENSE');
  const dataLabels = onlyExpenses.map(el => el.name);
  let dataAmount = onlyExpenses.map(el => el.total);

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
    <Wrapper>
      <Doughnut data={data} options={options} />
    </Wrapper>
  );
};

export default Chart;
