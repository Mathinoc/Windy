//import React, { useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import formatDate from '../utils/formatDate';
import colorScale from '../utils/colorScale';
Chart.register(...registerables);

export default function WindChart({ windData }: { windData: { timestamp: string, force: number, dir: number }[] }) {

  const graphLabel = windData.map(el => formatDate(el.timestamp));
  const windSpeed = windData.map(el => el.force);
  const barColors = colorScale(windSpeed);
  const data = {
    labels: graphLabel,
    datasets: [{
      // label: "#",
      data: windSpeed,
      backgroundColor: barColors,
      borderWidth: 1,
      hoverBorderWidth: 1.4,
      datalabels: {
        anchor: "end" as "end",
        align: "top" as "top",
        offset: 10
      },
    }]
  }
  const options = {
    plugins: {
      title: {
        display: true,
        fontSize: 20,
        fontStyle: 'bold',
      },
      legend: {
        display: false,
      }
    },
  }
  return (
    <div>
      <Bar data={data} plugins={[ChartDataLabels]} options={options} />
    </div>
  )
}
