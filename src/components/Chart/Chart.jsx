import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Wrapper } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data, options }) => {
  return (
    <Wrapper>
      <Doughnut data={data} options={options} />
    </Wrapper>
  );
};

export default Chart;
