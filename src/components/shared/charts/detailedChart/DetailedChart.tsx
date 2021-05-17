import React from 'react'
import { Bar } from 'react-chartjs-2'

export interface DetailedChartProps {};

export const DetailedChart = (props: DetailedChartProps) => {

    const barData = ['5', '5', '6', '7', '9', '8', '8', '8', '10', '12', '13', '15', '16', '14', '15', '16', '17', '18', '19', '19', '19', '15', '16', '20', '21', '20', '21', '19', '18', '18', '17', '19', '19', '17', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    const lineData = ['1', '2', '3', '3', '4', '5', '3', '2', '6', '7', '8', '8', '7', '7', '8', '9', '10', '11', '12', '12', '10', '9', '13', '17', '13', '12', '11', '10', '10', '10', '9', '8', '10', '10', '8', '8', '7', '5', '4', '3', '4', '5', '6'];
    const labels = ['25', '26', '27', '28', '29', '30', '31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6'];
    
    const data = {
      labels: labels,
      datasets: [
        {
          type: 'bar',
          label: 'Number of systems',
          data: barData,
          fill: false,
          backgroundColor: 'rgb(103, 160, 224, 0.3)',
          borderColor: 'rgb(103, 160, 224, 0.8)'  ,
          borderWidth: 2,
        },
        {
          type: 'line',
          label: 'Unused systems',
          data: lineData,
          fill: true,
          backgroundColor: 'rgb(39, 160, 45, 0.3)',
          borderColor: 'rgb(39, 160, 45, 0.8)',
          borderWidth: 2,
          pointStyle: 'rect',
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgb(39, 160, 45, 0.8)',
          pointRadius: 6,
          pointHoverRadius: 7,
        },
      ],
    }
    
    const options = {
      legend: {
        usePointStyle: true,
        align: 'end',
        fontFamily: "'Montserrat-Bold', sans-serif",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              fontSize: 10,
              fontFamily: "'Montserrat-Bold', sans-serif"
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 10,
              fontFamily: "'Montserrat-Bold', sans-serif"
            },
          },
        ],
      },
    }

    return (
        <Bar
            data={data}
            options={options}
            height={105}
            width={400}
        />
    )
}