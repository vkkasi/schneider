import { useContext } from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

// 슈나이더 view
import CenteredSlidesStyle1 from './CenteredSlidesStyle1'
import ChillerInfo from './ChillerInfo'
import ChillerSetting from './ChillerSetting'
import RealtimeEvent from './RealtimeEvent'
import ColumnStacked100 from './charts/ColumnStacked100'

import RealtimeAlarm from '@src/views/schneider/widget/RealtimeAlarm'


import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/noui-slider/noui-slider.scss'

const DashboardFacilities = () => {
  const context = useContext(ThemeColors)
  
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  const handlerSwiper = (val) => {
    console.log(val)
  }

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col>
          <CenteredSlidesStyle1 handlerSwiper={handlerSwiper}/>
        </Col>
      </Row>
      <hr />
      <Row className='match-height'>
        <Col xs='3'>
          <Row className='match-height'>
            <Col xs='12'>
              <ChillerInfo />
              <ColumnStacked100 />
            </Col>
          </Row>
        </Col>
        <Col xs='6'>
          <Row className='match-height'>
            <Col xs='12'>
              <img src='/images/facilities/temp.png'/>
            </Col>
          </Row>
        </Col>
        <Col xs='3'>
          <Row className='match-height'>
            <Col xs='12'>
              <ChillerSetting />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
				<Col>
				<RealtimeAlarm cate={'FA'}></RealtimeAlarm>
				</Col>
			</Row>
    </div>
  )
}

export default DashboardFacilities
