import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import { Settings } from 'react-feather'

const IntergratedTemperatureHumidityState = () => {
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

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>통합 온도/습도 현황</CardTitle>
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
