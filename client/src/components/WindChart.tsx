import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import formatDate from '../utils/formatDate';
import colorScale from '../utils/colorScale';
import arrow from '../assets/navigation-color.png';
ChartJS.register(...registerables);

export default function WindChart({ windData }: { windData: { timestamp: string, force: number, dir: number }[] }) {

  const graphLabel = windData.map(el => formatDate(el.timestamp));
  const windSpeed = windData.map(el => el.force);
  const barColors = colorScale(windSpeed);
  const arrowPosition = [-5, -5, -5, -5, -5, -5, -5];
  const rotation = windData.map(el => el.dir);
  const imageArrow = new Image();
  imageArrow.src = arrow;

  const data = {
    labels: graphLabel,
    datasets: [
      {
        type: "bar" as const,
        data: windSpeed,
        backgroundColor: barColors,
        borderWidth: 1,
        hoverBorderWidth: 1.4,
        datalabels: {
          anchor: "end" as "end",
          align: "top" as "top",
          offset: 10,
        },
      },
      {
        type: "line" as const,
        data: arrowPosition,
        borderColor: "#FFFFFF",
        hoverBorderWidth: 1.4,
        pointStyle: imageArrow,
        rotation: rotation,
        datalabels: {
          anchor: "center" as "center",
          color: 'rgb(0,0,255,0)',
        },
      }
    ]
  }
  const options = {
    layout: {
      padding: {
        bottom: 30,
      },
    },
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
    scales: {

      yAxes: {
        barPercentage: 0.9,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Wind speed (knots)',
          font: {
            size: 15,
          }
        },
        ticks: {
          beginAtZero: false,
          stepSize: 10,
          min: 0,
        }
      },
      xAxes: {
        stacked: true,
        barPercentage: 0.1,
        grid: {
          display: false,
        },

      }
    }
  }
  return (
    <div>
      <Chart data={data} plugins={[ChartDataLabels]} options={options} type={"bar"} />
    </div>
  )
}
