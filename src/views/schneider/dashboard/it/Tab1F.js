import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

import RealtimeEvent from './RealtimeEvent'
import EquipmentSetting from './EquipmentSetting'
import WidgetTimeLine from './WidgetTimeLine'
import RealtimeCondition from './RealtimeCondition'
import WidgetGridCondition from './WidgetGridCondition'
import ColumnDistributed from './charts/ColumnDistributed'
import RealtimeAlarm from '@src/views/schneider/widget/RealtimeAlarm'
import CytoscapeMain from '@src/views/schneider/cytoscape'

const Tab1F = () => {
  return (
    <>
      <Row className='match-height'>
        <Col xs='6'>
			<Card className='card-green-kpis'>
				{/* <CardHeader>
					<div></div>
					<CardTitle className='ta-c' tag='h4'>시간당 Voltage Sag/Swell 발생빈도</CardTitle>
					<Settings size={18} className='cursor-pointer' />
				</CardHeader> */}
        <CardBody>
					<CytoscapeMain useLayout=''/>
				</CardBody>
			</Card>
        </Col>
        <Col xs='6'>
          <Row className='match-height'>
            <Col xs='12'>
              <ColumnDistributed />
            </Col>
            <Col xs='12'>
              <RealtimeCondition />
            </Col>
            <Col xs='12'>
				<Row className='match-height'>
					<Col xs='6'>
					<WidgetTimeLine />
					</Col>
					<Col xs='6'>
						<EquipmentSetting />
					</Col>
				</Row>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row className='match-height'>
        <Col xs='3'>
          <RealtimeEvent />
        </Col>
        <Col xs='3'>
          <WidgetTimeLine />
        </Col>
        <Col xs='6'>
          <EquipmentSetting />
        </Col>
      </Row> */}
	  <Row>
        <Col>
          <RealtimeAlarm/>
        </Col>
      </Row>
    </>
  )
}

export default Tab1F