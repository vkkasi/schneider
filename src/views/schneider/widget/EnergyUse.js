/* eslint-disable object-shorthand */
import { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Settings } from 'react-feather'

const EnergyUse = () => {
  const TICKINTERVAL = 86400000
  const XAXISRANGE = 777600000
  
  function getDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0
    const series = []
    while (i < count) {
      const x = baseval
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  
      series.push([x, y])
      baseval += TICKINTERVAL
      i++
    }

    return series
  }
  
  // console.log(series[2].data[series[2].data.length - 1][0])
  
  function resetData(data) {
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
    data = data.slice(data.length - 10, data.length)
    return data
  }

  function getNewSeries(yrange, data) {
    const lastDate = data[data.length - 1][0]
    const newDate = lastDate + TICKINTERVAL
    // lastDate = newDate

    for (let i = 0; i < data.length - 10; i++) {
      // IMPORTANT
      // we reset the x and y of the data which is out of drawing area to prevent memory leaks
      data[i][0] = newDate - XAXISRANGE - TICKINTERVAL
      data[i][1] = 0
    }

    console.log('data1', data)

    data.push([
      newDate,
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    ])

    return data
  }
  
  
  const options = {
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      dashArray: [0, 0, 5]
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE
    },
    yaxis: {
      max: 100
    }
  }

  const series = [
    {
      name: 'data1',
      data: getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 }).slice()
    },
    {
      name: 'data2',
      data: getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 }).slice()
    },
    {
      name: 'data3',
      data: getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 }).slice()
    }
  ]

  useEffect(() => {
    const interval = window.setInterval(() => {
      ApexCharts.exec('realtime', 'updateSeries', [
        {
          data: getNewSeries({ min: 10, max: 90 }, series[0].data).slice()
        },
        {
          data: getNewSeries({ min: 10, max: 90 }, series[1].data).slice()
        },
        {
          data: getNewSeries({ min: 10, max: 90 }, series[2].data).slice()
        }
      ])
    }, 5000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>시간대별 온/습도</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={250} />
      </CardBody>
    </Card>
  )
}

export default EnergyUse