import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
    },
  });

  const appendData = () => {
    const arr = [...chartData.series];
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setChartData({ ...chartData, series: arr });
  };

  const removeData = () => {
    if (chartData.series.length === 1) return;
    const arr = [...chartData.series];
    arr.pop();
    setChartData({ ...chartData, series: arr });
  };

  const randomize = () => {
    setChartData({
      ...chartData,
      series: chartData.series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1),
    });
  };

  const reset = () => {
    setChartData({ ...chartData, series: [44, 55, 13, 33] });
  };

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart options={chartData.options} series={chartData.series} type="donut" width={380} />
        </div>
      </div>

      <div className="actions">
        <button onClick={appendData}>+ ADD</button>
        &nbsp;
        <button onClick={removeData}>- REMOVE</button>
        &nbsp;
        <button onClick={randomize}>RANDOMIZE</button>
        &nbsp;
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default ApexChart;
