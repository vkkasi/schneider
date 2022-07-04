import { useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import { Settings } from 'react-feather'
import { kFormatter } from '@utils'

import SubscribersGained from './charts/SubscribersGained'

const RealtimeCondition = () => {
  function getRandomSeries(count, yrange) {
    let i = 0
    const series = []
    while (i < count) {
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  
      series.push(y)
      i++
    }

    return series
  }

  let i = 1;
  const datas = [];

  while (i < 13) {
    const series = getRandomSeries(7, {min: 0, max: 99})
    let color = '#ae2f41'
    if (0 < series[6] && series[6] < 24) color = '#017dba'
    if (25 < series[6] && series[6] < 49) color = '#459c4d'
    if (50 < series[6] && series[6] < 74) color = '#ffc105'
    const obj = {
      title: `서버-1${i < 10 ? '0' : ''}${i}`,
      subTitle: `${series[6]}도`,
      color: color,
      series: [
        {
            name: "온도",
            data: series
        }
      ]
    }

    datas.push(obj)
    i++;
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>1F Rack 온도 Hot Spot – 12</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Row className='match-height'>
          <Col xs='2'>
            <SubscribersGained data={datas[0]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[1]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[2]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[3]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[4]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[5]} />
          </Col>
        </Row>
        <Row className='match-height'>
          <Col xs='2'>
            <SubscribersGained data={datas[6]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[7]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[8]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[9]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[10]} />
          </Col>
          <Col xs='2'>
            <SubscribersGained data={datas[11]} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default RealtimeCondition
