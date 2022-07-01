/* eslint-disable multiline-ternary */
/* eslint-disable quote-props */
/* eslint-disable object-shorthand */
import { useEffect, useState, useRef } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Settings } from 'react-feather'

import axios from 'axios'

const EnergyUse = () => {
  const [temp, setTemp] = useState([])
  const [humi, setHumi] = useState([])

  // const TICKINTERVAL = 86400000
  // const XAXISRANGE =  777600000
  const TICKINTERVAL = 600000
  const XAXISRANGE =  5400000
  
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
      min: 0,
      max: 100
    }
  }

  // axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoicG9zdGdyZXMifQ.uZEL0p6wg-CzopSdlaTf5HA1TQK7X44LRWzY9P9gotU';

  // const config = {
  //   withCredentials: true, 
  //   headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoicG9zdGdyZXMifQ.uZEL0p6wg-CzopSdlaTf5HA1TQK7X44LRWzY9P9gotU'
  //   }
  // }

  // function getData(order, limit) {
  //   // config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoicG9zdGdyZXMifQ.uZEL0p6wg-CzopSdlaTf5HA1TQK7X44LRWzY9P9gotU';
  //   // console.log('config', config);
  //   axios.get('http://13.125.248.32:3000/mysnmp2?order=logtime.desc&limit=1')
  //     .then(response => {
  //       console.log('response', response.json());
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //     })
  // }

  const replaceDate = (text) => {
    return `${text.substr(0, 10)} ${text.substr(11, 2)}:${text.substr(14)}:00`;
  }

  async function getInitData() {
    fetch(`http://13.125.248.32:3000/mysnmp2?order=logtime.desc&limit=10`)
    .then(response => response.json())
    .then(response => {
      const aTemp = [];
      const aHumi = [];
      let date = ''

      response.reverse();
      response.map(item => {
        date = replaceDate(item.logtime);
        aTemp.push([new Date(date).getTime(), item.sensortemp]);
        aHumi.push([new Date(date).getTime(), item.sensorhumi]);
      })
      // console.log(aTemp, aHumi)
      setTemp(aTemp);
      setHumi(aHumi);
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  function getData(series) {
    fetch(`http://13.125.248.32:3000/mysnmp2?order=logtime.desc&limit=1`)
    .then(response => response.json())
    .then(response => {
      const date = new Date(replaceDate(response[0].logtime)).getTime();

      setTemp([...temp, [date, response[0].sensortemp]])
      setHumi([...humi, [date, response[0].sensorhumi]])

      // const aTemp = [...temp];
      // const aHumi = [...humi];
      // let date = ''
      // date = replaceDate(response[0].logtime);
      // aTemp.push([new Date(date).getTime(), response[0].sensortemp]);
      // aHumi.push([new Date(date).getTime(), response[0].sensorhumi]);
      // console.log(aTemp, aHumi)
      // setTemp(aTemp);
      // setHumi(aHumi);
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  // setInterval state 문제 해결
  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
  
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  const series = [
    {
      name: '온도',
      data: temp
    },
    {
      name: '습도',
      data: humi
    }
  ]

  // const series = [
  //   {
  //     name: 'data1',
  //     data: getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 }).slice()
  //   },
  //   {
  //     name: 'data2',
  //     data: getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 }).slice()
  //   },
  //   {
  //     name: 'data3',
  //     data: getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 }).slice()
  //   }
  // ]

  useInterval(() => {
    getData(series);

    ApexCharts.exec('realtime', 'updateSeries', [
      {
        data: temp
      },
      {
        data: humi
      },
      // {
      //   data: getNewSeries({ min: 10, max: 90 }, series[2].data).slice()
      // }
    ])
  }, 600000);

  useEffect(() => {
    getInitData();
  }, [])

  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>RACK 시간대별 온/습도</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={250} />
      </CardBody>
    </Card>
  )
}

export default EnergyUse