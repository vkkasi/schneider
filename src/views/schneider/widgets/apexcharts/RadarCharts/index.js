import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

const RadarCharts = ({title}) => {
	const options = {
		chart: {
			type: 'radar',
			toolbar: {
				show: false
			},
			// parentHeightOffset: 0
		},
		xaxis: {
			categories: ['파워', '보안', '시설', '기타', '센서', 'IT'],
		},
		fill: {
			opacity: 0.7,
		},
		// legend: {
		// 	show: false
		// }
		plotOptions: {
			radar: {
				polygons: {
					strokeColors: '#fff',
					strokeWidth: 0.5,
					fill: {
						colors: ['transparent']
					}
				},
			  

			}
		},
		markers: {
			size: 0,
		},
		dataLabels: {
			enabled: true,
			background: {
				enabled: true,
				borderRadius: 2,
			}
		}
	}

	const series = [{
		name: '알람수',
		data: [80, 50, 30, 40, 100, 20],
	}]

	return (
		<Card className='card-green-kpis'>
			<CardHeader>
				<div></div>
				<CardTitle className='ta-c' tag='h4'>{title}</CardTitle>
				<Settings size={18} className='cursor-pointer' />
			</CardHeader>
			<CardBody>
				<div className='box-chart'>
					<Chart options={options} series={series} type='radar' height={500} />
				</div>
			</CardBody>
		</Card>
	)
}

export default RadarCharts