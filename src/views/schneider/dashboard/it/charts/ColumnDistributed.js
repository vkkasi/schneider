/* eslint-disable object-shorthand */
import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

const ColumnDistributed = () => {
  const colors = [
    '#008FFB',
    '#00E396',
    '#FEB019',
    '#FF4560',
    '#775DD0',
    '#546E7A',
    '#26a69a',
    '#D10CE8',
    '#008FFB',
    '#00E396',
    '#FEB019'
  ]

  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      },
      toolbar: {
        show: false
      }
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '10%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'R-101',
        'R-102',
        'R-103',
        'R-104',
        'R-105',
        'R-106',
        'R-107',
        'R-108',
        'R-109',
        'R-110',
        'R-111'
      ],
      title: {
        text: 'Rack'
      },
      labels: {
        style: {
          colors: colors,
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      title: {
        text: '%',
        style: {
          color: '#ffffff'
        }
      }
    }
  }

  const series = [
    {
      data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    }
  ]

  console.log(series)

  return (
    <>
      <Card className='card-transaction'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>1F Rack 사용현황</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <Chart options={options} series={series} type='bar' height={250} />
        </CardBody>
      </Card>
    </>
  )
}

export default ColumnDistributed
