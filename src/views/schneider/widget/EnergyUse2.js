import { useEffect, useState, useRef } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Settings } from 'react-feather'

const EnergyUse2 = ({ num }) => {
  const TICKINTERVAL = 86400000
  const XAXISRANGE =  777600000
  
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

    data.push([
      newDate,
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    ])

    return data
  }

  const options = {
    chart: {
      id: 'realtime2',
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
      min: 0,
      max: 100
    }
  }

  const series = [
    {
      name: '물',
      data: getDayWiseTimeSeries(new Date('05 Jul 2022 GMT').getTime(), 10, { min: 40, max: 50 }).slice()
    },
    {
      name: '가스',
      data: getDayWiseTimeSeries(new Date('05 Jul 2022 GMT').getTime(), 10, { min: 10, max: 25 }).slice()
    },
    {
      name: '전기',
      data: getDayWiseTimeSeries(new Date('05 Jul 2022 GMT').getTime(), 10, { min: 65, max: 85 }).slice()
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      ApexCharts.exec('realtime2', 'updateSeries', [
        {
          data: getNewSeries({ min: 40, max: 50 }, series[0].data).slice()
        },
        {
          data: getNewSeries({ min: 10, max: 25 }, series[1].data).slice()
        },
        {
          data: getNewSeries({ min: 65, max: 85 }, series[2].data).slice()
        }
      ])
    }, 5000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>{ num }F 시간대별 전기/물/가스 사용량</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={250} />
      </CardBody>
    </Card>
  )
}

export default EnergyUse2