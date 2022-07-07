/* eslint-disable no-var */
import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

function generateData(count, yrange) {
	var i = 0;
	var series = [];
	while (i < count) {
	  var x = (i + 1).toString();
	  var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
	  series.push({
		x: x,
		y: y
	  });
	  i++;
	}

	console.log(series)
	return series;
}

const HeatMap = () => {
  const options = {
	chart: {
		type: 'heatmap',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		heatmap: {
			shadeIntensity: 0,
			radius: 0,
			useFillColorAsStroke: true,
			colorScale: {
				ranges: [
					{
						from: 0,
						to: 2,
						color: '#0000ff'
					},
					{
						from: 3,
						to: 5,
						color: '#0033ff'
					},
					{
						from: 6,
						to: 8,
						color: '#0066ff'
					},
					{
						from: 9,
						to: 11,
						color: '#0099ff'
					},
					{
						from: 12,
						to: 14,
						color: '#00ccff'
					},
					{
						from: 15,
						to: 17,
						color: '#00ffff'
					},
					{
						from: 18,
						to: 20,
						color: '#00ffcc'
					},
					{
						from: 21,
						to: 23,
						color: '#00ff99'
					},
					{
						from: 24,
						to: 27,
						color: '#00ff66'
					},
					{
						from: 27,
						to: 29,
						color: '#00ff33'
					},
					{
						from: 30,
						to: 32,
						color: '#00ff00'
					},
					{
						from: 33,
						to: 35,
						color: '#33ff00'
					},
					{
						from: 36,
						to: 38,
						color: '#66ff00'
					},
					{
						from: 39,
						to: 41,
						color: '#99ff00'
					},
					{
						from: 42,
						to: 44,
						color: '#ccff00'
					},
					{
						from: 45,
						to: 47,
						color: '#ffff00'
					},
					{
						from: 48,
						to: 50,
						color: '#ffcc00'
					},
					{
						from: 51,
						to: 53,
						color: '#ff9900'
					},
					{
						from: 54,
						to: 56,
						color: '#ff6600'
					},
					{
						from: 57,
						to: 59,
						color: '#ff3300'
					},
					{
						from: 60,
						to: 62,
						color: '#ff0000'
					}
				]
			}
		}
		
		
    },
    xaxis: {
      categories: ['일', '월', '화', '수', '목', '금', '토']
    },
    fill: {
      opacity: 1,
    },
	stroke: {
		width: 1
	},
    legend: {
      show: false
    },
	dataLabels: {
		enabled: false
	},
  }

	const series = [
		{
			name: '오전 12:00',
			data: [{x: '1', y: 0}, {x: '2', y: 8}, {x: '3', y: 17}, {x: '4', y: 26}, {x: '5', y: 35}, {x: '6', y: 44}, {x: '7', y: 53}]
		},
		{
			name: '오전 2:00',
			data: [{x: '1', y: 1}, {x: '2', y: 9}, {x: '3', y: 18}, {x: '4', y: 27}, {x: '5', y: 36}, {x: '6', y: 45}, {x: '7', y: 54}]
		},
		{
			name: '오전 4:00',
			data: [{x: '1', y: 2}, {x: '2', y: 10}, {x: '3', y: 19}, {x: '4', y: 28}, {x: '5', y: 37}, {x: '6', y: 46}, {x: '7', y: 55}]
		},
		{
			name: '오전 6:00',
			data: [{x: '1', y: 3}, {x: '2', y: 11}, {x: '3', y: 20}, {x: '4', y: 29}, {x: '5', y: 38}, {x: '6', y: 47}, {x: '7', y: 56}]
		},
		{
			name: '오전 8:00',
			data: [{x: '1', y: 4}, {x: '2', y: 12}, {x: '3', y: 21}, {x: '4', y: 30}, {x: '5', y: 39}, {x: '6', y: 48}, {x: '7', y: 57}]
		},
		{
			name: '오전 10:00',
			data: [{x: '1', y: 5}, {x: '2', y: 13}, {x: '3', y: 22}, {x: '4', y: 31}, {x: '5', y: 40}, {x: '6', y: 49}, {x: '7', y: 58}]
		},
		{
			name: '오후 12:00',
			data: [{x: '1', y: 6}, {x: '2', y: 14}, {x: '3', y: 23}, {x: '4', y: 32}, {x: '5', y: 41}, {x: '6', y: 50}, {x: '7', y: 59}]
		},
		{
			name: '오후 2:00',
			data: [{x: '1', y: 7}, {x: '2', y: 15}, {x: '3', y: 24}, {x: '4', y: 33}, {x: '5', y: 42}, {x: '6', y: 51}, {x: '7', y: 60}]
		},
		{
			name: '오후 4:00',
			data: [{x: '1', y: 8}, {x: '2', y: 16}, {x: '3', y: 25}, {x: '4', y: 34}, {x: '5', y: 43}, {x: '6', y: 52}, {x: '7', y: 61}]
		},
		{
			name: '오후 6:00',
			data: [{x: '1', y: 10}, {x: '2', y: 17}, {x: '3', y: 26}, {x: '4', y: 35}, {x: '5', y: 44}, {x: '6', y: 53}, {x: '7', y: 62}]
		},
		{
			name: '오후 8:00',
			data: [{x: '1', y: 11}, {x: '2', y: 18}, {x: '3', y: 27}, {x: '4', y: 36}, {x: '5', y: 45}, {x: '6', y: 54}, {x: '7', y: 0}]
		},
		{
			name: '오후 10:00',
			data: [{x: '1', y: 12}, {x: '2', y: 19}, {x: '3', y: 28}, {x: '4', y: 37}, {x: '5', y: 46}, {x: '6', y: 55}, {x: '7', y: 1}]
		}
		
	]

  return (
    <>
      <Card className='card-green-kpis'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>온도맵</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='box-chart'>
            <Chart options={options} series={series} type='heatmap' height={270} />
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default HeatMap