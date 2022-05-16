import React, { Component, createRef } from 'react';
import Chart from 'chart.js/auto';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
  }

  componentDidMount() {
    const ctx = this.chartRef.current;
    const { data } = this.props;
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['APIs Created', 'APIs Tested'],
        datasets: [
          {
            data: [data[0].results, data[1].results],
            label: 'APIs Data',
            borderColor: '#3e95cd',
            radius: '80%',
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
          },
        ],
      },
      options: {
        layout: {
          padding: {
            bottom: 225,
          },
        },
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

export default PieChart;
