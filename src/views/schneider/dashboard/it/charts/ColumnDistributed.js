/* eslint-disable object-shorthand */
import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

const ColumnDistributed = ({ num }) => {
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
    '#FEB019',
    '#008FFB',
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
        'RACK-101',
        'RACK-102',
        'RACK-103',
        'RACK-104',
        'RACK-105',
        'RACK-106',
        'RACK-107',
        'RACK-108',
        'RACK-109',
        'RACK-110',
        'RACK-111',
        'RACK-112'
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
      data: [85, 89, 92, 92, 95, 95, 98, 100, 100, 100, 100, 100]
    }
  ]

  return (
    <>
      <Card className='card-transaction'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>{num}F Rack 사용량 Hot Spot – 12</CardTitle>
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
