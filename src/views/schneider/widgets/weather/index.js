import { useEffect, useState, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'
import styled from 'styled-components'

import { useInterval } from '@hooks/useInterval'

const APIKey = 'FfOFAORgfXGq7hk%2FD0i8pglsdu%2FNc9WdGGQzwWGA8uK3n7XZo55cY75JV7sqwpWLcqYics7%2B%2FEqNJOgCLDs%2FFw%3D%3D'
const initJSON = { nx: '61', ny: '125', pageNo: '1', numOfRows: '1000', dataType: 'JSON' }

const Weather = ({ widgetDetail, onClickSetting }) => {
  const [temp, setTemp] = useState('')
  const [humi, setHumi] = useState('')
  const [sky, setSky] = useState('')
  const [rain, setRain] = useState('')
  const [time, setTime] = useState('')
  const [icon, setIcon] = useState('')

  const getWeather = () => {
    let tmp;
    const date = new Date();	// 현재 날짜 및 시간
    const year = `${date.getFullYear()}`;	// 년도
    tmp = date.getMonth() + 1;
    const month = (tmp < 10) ? `0${tmp}` : `${tmp}`	// 월
    tmp = date.getDate();
    const day = (tmp < 10) ? `0${tmp}` : `${tmp}`	// 일
    tmp = date.getHours();
    const hours = (tmp - 1 < 10) ? `0${tmp - 1}00` : `${tmp - 1}00`	// 시간
    const hours2 = (tmp < 10) ? `0${tmp}00` : `${tmp}00`	// 시간
    // console.log(year, month, day, hours)

    setTime((tmp < 10) ? `0${tmp}:00` : `${tmp}:00`)

    fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${APIKey}&pageNo=${initJSON.pageNo}&numOfRows=${initJSON.numOfRows}&dataType=${initJSON.dataType}&base_date=${year}${month}${day}&base_time=${hours}&nx=61&ny=125`)
    .then(response => response.json())
    .then(response => {
      // console.log(response.response.body.items.item)
      // setWeatherData(response.response.body.items.item)
      const weatherData = response.response.body.items.item

      weatherData.map(item => {
        if (item.category === 'T1H' && item.fcstTime === hours2) setTemp(item.fcstValue)
        if (item.category === 'REH' && item.fcstTime === hours2) setHumi(item.fcstValue)
        if (item.category === 'SKY' && item.fcstTime === hours2) {
          setSky(item.fcstValue)
          setIcon(`${process.env.PUBLIC_URL}/images/weather/sky${item.fcstValue}.png`)
        }
        if (item.category === 'PTY' && item.fcstTime === hours2) {
          setRain(item.fcstValue)
          if (rain !== '0') {
            setIcon(`${process.env.PUBLIC_URL}/images/weather/rain${item.fcstValue}.png`)
          }
        }
      })
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  useInterval(() => {
    getWeather();
  }, 60000);

  useEffect(() => {
    getWeather();
  }, [])

  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>{widgetDetail.title}</CardTitle>
        <Settings size={18} className='cursor-pointer' onClick={() => onClickSetting()} />
      </CardHeader>
      <CardBody>
        <WidgetWeather>
          <div className='time'>{time} 기준</div>
          <div className='icon'><img src={icon}/></div>
          <div className='text'>
            <p>{temp}℃</p>
            <p>{humi}%</p>
          </div>
        </WidgetWeather>
      </CardBody>
    </Card>
  )
}

export default Weather

const WidgetWeather = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .text {
    border-top: 1px solid #293249 ;
    display: flex;
    width: 100%;
    > p {
      width: 50%;
      justify-align: center;
      padding: 1rem;
      font-size: 1.5rem;
      margin: 0;
    }
    > p + p {
      border-left: 1px solid #293249 ;
    }
  }
`