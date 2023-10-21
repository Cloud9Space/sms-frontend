import React from "react";
import ReactECharts from 'echarts-for-react';

const Chart = () => {
  const option = {
    // title: {
    //   text: 'Admission'
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['2018', '2019', '2020', '2022', '2023'],
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'value',
    },
    // label:{
    //   show: true
    // },
    series: [
      {
        name: '8th',
        type: 'bar',
        data: [30, 55, 50, 82, 100]
      },
      {
        name: '9th',
        type: 'bar',
        data: [40, 55, 68, 99, 110]
      },
        {
        name: '10th',
        type: 'bar',
        data: [50, 55, 44, 82, 100]
      },
  
      {
        name: '11th',
        type: 'bar',
        data: [150, 140, 170, 190, 200]
      },
      {
        name: '12th',
        type: 'bar',
        data: [155, 150, 166, 210, 220]
      }
  
    ]
  };
  return (
    <div>
      <ReactECharts option = {option}> </ReactECharts>
    </div>
  );
};



export default Chart;