import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

const AlarmState = () => {
  const colors = ['#ae2f41', '#d68502', '#459c4d', '#017dba']

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false
      },
      parentHeightOffset: 0
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%'
      }
    },
    xaxis: {
      categories: ['일', '월', '화', '수', '목', '금', '토']
    },
    fill: {
      opacity: 1,
      colors: colors
    },
    legend: {
      show: false
    }
  }

  const series = [
    {
      data: [44, 55, 41, 67, 22, 43, 21]
    }, {
      data: [13, 23, 20, 8, 13, 27, 33]
    }, {
      data: [11, 17, 15, 15, 21, 14, 15]
    }, {
      data: [17, 22, 32, 9, 27, 32, 16]
    }
  ]

  return (
    <>
      <Card className='card-green-kpis'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>알람 현황</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='box-chart'>
            <Chart options={options} series={series} type='bar' height={240} />
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default AlarmState