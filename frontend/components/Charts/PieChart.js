import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class PieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['APIs Created', 'APIs Tested'],
        datasets: [
          {
            data: [500, 345],
            label: 'APIs Data',
            borderColor: '#3e95cd',
            radius: '60%',
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
          },
        ],
      },
    });
  }
  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
