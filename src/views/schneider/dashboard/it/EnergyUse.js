/* eslint-disable object-shorthand */
import { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Settings } from 'react-feather'

const EnergyUse = () => {
  let lastDate = 0
  let data = []
  const TICKINTERVAL = 86400000
  const XAXISRANGE = 777600000
  
  function getDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0
    while (i < count) {
      const x = baseval
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  
      data.push({
        x, y
      })
      lastDate = baseval
      baseval += TICKINTERVAL
      i++
    }
  }
  
  getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
  })
  
  function getNewSeries(baseval, yrange) {
    const newDate = baseval + TICKINTERVAL
    lastDate = newDate
  
    for (let i = 0; i < data.length - 10; i++) {
      // IMPORTANT
      // we reset the x and y of the data which is out of drawing area
      // to prevent memory leaks
      data[i].x = newDate - XAXISRANGE - TICKINTERVAL
      data[i].y = 0
    }
  
    data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    })
  }
  
  function resetData() {
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
    data = data.slice(data.length - 10, data.length)
  }

  useEffect(() => {
    window.setInterval(() => {
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      })
      
      ApexCharts.exec('realtime', 'updateSeries', [
        {
          data: data
        }
      ])
    }, 5000)
  }, [])

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
      curve: 'smooth'
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
    },
    legend: {
      show: false
    }
  }

  const series = [
    {
      data: data.slice()
    }
  ]

  const series1 = [
    {
      name: "사용량",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "외부온도",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: '센터온도',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47] 
    }
  ]

  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>에너지 사용량</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={250} />
      </CardBody>
    </Card>
  )
}

export default EnergyUse