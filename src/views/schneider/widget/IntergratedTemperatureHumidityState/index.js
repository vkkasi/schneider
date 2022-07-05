import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import { Settings } from 'react-feather'

import axios from 'axios';
import { useEffect, useState } from 'react';

const IntergratedTemperatureHumidityState = () => {
  const instance = axios.create({
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })

  // const [weatherData, setWeatherData] = useState([])
  const [temp, setTemp] = useState('')
  const [humi, setHumi] = useState('')

  const transactionsArr1 = [
    {
      name: '외부',
      temprature: '32°C',
      humidity: '40',
      state: 20
    },
    {
      name: '배터리',
      temprature: '22.8°C',
      humidity: '0',
      state: 10
    },
    {
      name: 'FCU',
      temprature: '26.4°C',
      humidity: '28',
      state: 40
    },
    {
      name: 'AHU',
      temprature: '24.2°C',
      humidity: '25',
      state: 0
    }
  ]

  const transactionsArr2 = [
    {
      name: '시설',
      temprature: '21.5°C',
      humidity: '22',
      state: 10
    },
    {
      name: 'Rack',
      temprature: '22°C',
      humidity: '18',
      state: 10
    },
    {
      name: 'CRAC',
      temprature: '22.9°C',
      humidity: '31',
      state: 10
    },
    {
      name: '배관',
      temprature: '31°C',
      humidity: '0',
      state: 0
    }
  ]

  const renderTransactions = (arr) => {
    return arr.map((item, index) => {
      let strHumidity = ''
      let stateClass = ''

      switch (item.state) {
        case 10:
          stateClass = 'bg-smarty-green'
          break
        case 20:
          stateClass = 'bg-smarty-red'
          break
        case 30:
          stateClass = 'bg-smarty-blue'
          break
        case 40:
          stateClass = 'bg-smarty-orange'
          break
      }

      if (item.humidity !== '') {
        strHumidity = ` / ${item.humidity}%`
      }

      return (
        <div key={index} className={`d-flex justify-content-center work-schedule work-schedule-color ${stateClass}`}>
          <div className='item text-center'>{item.name}</div>
          <div className='item text-center flex-grow-1'>{item.temprature}{strHumidity}</div>
        </div>
      )
    })
  }


  const getWeather = () => {
    let tmp;
    const date = new Date();	// 현재 날짜 및 시간
    const year = `${date.getFullYear()}`;	// 년도
    tmp = date.getMonth() + 1;
    const month = (tmp < 10) ? `0${tmp}` : `${tmp}`	// 월
    tmp = date.getDate();
    const day = (tmp < 10) ? `0${tmp}` : `${tmp}`	// 일
    tmp = date.getHours();
    const hours = (tmp < 10) ? `0${tmp}00` : `${tmp}00`	// 시간
    console.log(year, month, day, hours)
    
    fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=FfOFAORgfXGq7hk%2FD0i8pglsdu%2FNc9WdGGQzwWGA8uK3n7XZo55cY75JV7sqwpWLcqYics7%2B%2FEqNJOgCLDs%2FFw%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${year}${month}${day}&base_time=${hours}&nx=61&ny=125`)
    .then(response => response.json())
    .then(response => {
      // console.log(response.response.body.items.item)
      // setWeatherData(response.response.body.items.item)
      const weatherData = response.response.body.items.item

      weatherData.map(item => {
        if (item.category === 'T1H') setTemp(item.obsrValue)
        if (item.category === 'REH') setHumi(item.obsrValue)
      })



    })
    .catch(error => {
      console.log('error', error);
    })

  }

  useEffect(() => {
    getWeather();
  }, [])

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>통합 온도/습도 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div>
          <p>온도 : {temp}</p>
          <p>습도 : {humi}</p>
        </div>
        <Row>
          <Col>{renderTransactions(transactionsArr1)}</Col>
          <Col>{renderTransactions(transactionsArr2)}</Col>
        </Row>
       </CardBody>
    </Card>
  )
}

export default IntergratedTemperatureHumidityState
