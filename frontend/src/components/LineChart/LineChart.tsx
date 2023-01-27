import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
)

export const options = {
  responsive: true,
  lineTension: 0.8,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {},

      position: 'top' as const,
    },
  },
}

const labels = ['1/13', '1/14', '1/15', '1/16', '1/17', '1/18']
export default function LineChart(props: {
  target: Number[]
  achieved: Number[]
}) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Target',
            data: props.target,
            borderColor: '#F8BD8D',
            backgroundColor: '#F8BD8D',
          },
          {
            label: 'Achieved',

            data: props.achieved,
            borderColor: '#456086',
            backgroundColor: '#456086',
          },
        ],
      }}
      options={options}
    />
  )
}
