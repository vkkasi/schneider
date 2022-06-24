import { useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import { Settings } from 'react-feather'
import { kFormatter } from '@utils'

import SubscribersGained from './charts/SubscribersGained'
import RevenueGenerated from './charts/RevenueGenerated'
import QuaterlySales from './charts/QuaterlySales'

const RealtimeCondition = () => {
  const context = useContext(ThemeColors)

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>1F 실시간 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Row>
          {/* Stats Area Charts */}
          <Col xs='4'>
            <SubscribersGained kFormatter={kFormatter} />
          </Col>
          <Col xs='4'>
            <RevenueGenerated kFormatter={kFormatter} success={context.colors.success.main} />
          </Col>
          <Col xs='4'>
            <QuaterlySales danger={context.colors.danger.main} />
          </Col>
          {/* Stats Area Charts */}
        </Row>
      </CardBody>
    </Card>
  )
}

export default RealtimeCondition
