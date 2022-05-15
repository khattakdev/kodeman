import React, { Component } from 'react';
import Chart from 'chart.js/auto';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const ctx = this.chartRef.current;
    const { data } = this.props;
    Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          data[0].date,
          data[1].date,
          data[2].date,
          data[3].date,
          data[4].date,
          data[5].date,
          data[6].date,
        ],
        datasets: [
          {
            data: [
              data[0].apicreated,
              data[1].apicreated,
              data[2].apicreated,
              data[3].apicreated,
              data[4].apicreated,
              data[5].apicreated,
              data[6].apicreated,
            ],
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
export default BarChart;
