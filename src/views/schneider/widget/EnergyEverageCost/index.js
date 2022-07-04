import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

const EnergyEverageCost = () => {
  const colors = ['#017dba', '#6c3aa5', '#459c4d']

  const options = {
    chart: {
      type: 'line',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%'
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right'
    },
    stroke: {
      show: true,
      width: [4, 4, 4, 4],
      colors: [...colors, '#a36431']
    },
    colors: colors,
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      categories: ['오늘', '주간 평균', '월간 평균', 'ECO 기준'],
      labels: {
      }
    },
    yaxis: {
      title: {
        text: '백만원'
      }
    },
    fill: {
      opacity: 1
    }
  }

  const series = [
    {
    name: '전기',
    type: 'column',
    data: [14, 98, 392, 250]
    },
    {
      name: '물',
      type: 'column',
      data: [15, 105, 420,  275]
    },
    {
      name: '가스',
      type: 'column',
      data: [5, 35, 140, 90]
    },
    {
      name: '전체',
      type: 'line',
      data: [50, 100, 250, 200]
    }
  ]

  return (
    <>
      <Card className='card-green-kpis'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>Energy 평균 비용</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='box-chart'>
            <Chart options={options} series={series} type='line' height={240} />
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default EnergyEverageCost