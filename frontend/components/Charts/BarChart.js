import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class LineChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['VRTS', 'UDS', 'TODO', 'PROJECT', 'TEST'],
        datasets: [
          {
            data: [100, 345, 255, 565, 242],
            label: 'Numbers of APIs created',
            borderColor: '#3e95cd',
            backgroundColor: '#1d4ed8',
            fill: 'False',
          },
        ],
      },
    });
  }
  render() {
    return (
      <div className="">
        <canvas id="myChart" height="200vh" ref={this.chartRef} />
      </div>
    );
  }
}
