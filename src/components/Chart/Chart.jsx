import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { WrapperRel, WrapperTextAbs } from './Chart.styled';
import { ImSad2 } from "react-icons/im";
import { useTranslation } from 'react-i18next';
import { handlerCategories } from 'helpers/multiLanguage';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ datas, colors, balance }) => {
  const { t } = useTranslation();

  const { categoriesSummary } = datas;

  const onlyExpenses = categoriesSummary.filter(
    trans => trans.type === 'EXPENSE'
  );
  const dataLabels = onlyExpenses.map(el => t(handlerCategories(el.name)));
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
    <WrapperRel>
      {dataAmount.length ? (
        <WrapperTextAbs>
          &#8372;
          <br />
          {balance.toFixed(2)}
        </WrapperTextAbs>
      ) : (
        <WrapperTextAbs>
          <ImSad2 color='white' size='3em'/>
          </WrapperTextAbs>
      )}
      <Doughnut data={data} options={options} />
    </WrapperRel>
  );
};

export default Chart;
