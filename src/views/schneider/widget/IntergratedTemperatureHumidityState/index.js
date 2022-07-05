import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import { Settings } from 'react-feather'

import axios from 'axios';
import { useEffect, useState } from 'react';

const IntergratedTemperatureHumidityState = () => {
  const transactionsArr1 = [
    {
      name: 'RACK-201',
      temprature: '27.9°C',
      humidity: '40',
      state: 20
    },
    {
      name: 'UPS-211',
      temprature: '27.8°C',
      humidity: '40',
      state: 20
    },
    {
      name: 'FCU-03',
      temprature: '27.4°C',
      humidity: '28',
      state: 40
    },
    {
      name: 'AHU-001',
      temprature: '27.2°C',
      humidity: '25',
      state: 40
    }
  ]

  const transactionsArr2 = [
    {
      name: 'PUPS-222',
      temprature: '27.1°C',
      humidity: '22',
      state: 40
    },
    {
      name: 'RACK-207',
      temprature: '27°C',
      humidity: '18',
      state: 10
    },
    {
      name: 'CRAC-10',
      temprature: '26.9°C',
      humidity: '31',
      state: 10
    },
    {
      name: 'CRAC-11',
      temprature: '26.4°C',
      humidity: '0',
      state: 10
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

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>실시간 온도 임계치 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Row>
          <Col>{renderTransactions(transactionsArr1)}</Col>
          <Col>{renderTransactions(transactionsArr2)}</Col>
        </Row>
       </CardBody>
    </Card>
  )
}

export default IntergratedTemperatureHumidityState
