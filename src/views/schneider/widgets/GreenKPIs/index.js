import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import { Settings } from 'react-feather'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const GreenKPIs = () => {

  return (
    <>
      <Card className='card-green-kpis'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>Green KPI's</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <Row>
            <Col className='col-4'>
              <div className='co2 text-center'><img src='/images/co2.jpg'/></div>
              <div className='txt-ton'>CO2 발생량을<br/>Ton단위로 표시합니다.</div>
            </Col>
            <Col className='col-8'>
              <div className='green-kpi'>
                <div className='division'><span>오늘</span></div>
                <div className='summary'>
                  <div>110 Tons</div>
                  <div>(2022.07.06 : <span>121 Tons</span>)</div>
                </div>
                <div className='arrow'><span><FontAwesomeIcon icon={ faArrowDown } /></span></div>
              </div>
              <div className='green-kpi'>
                <div className='division'><span>주간</span></div>
                <div className='summary'>
                  <div>2,729 Tons</div>
                  <div>(2022.07 : <span>2,811Tons</span>)</div>
                </div>
                <div className='arrow'><span><FontAwesomeIcon icon={ faArrowDown } /></span></div>
              </div>
              <div className='green-kpi'>
                <div className='division'><span>월간</span></div>
                <div className='summary'>
                  <div>9,918 Tons</div>
                  <div>(2022.07 : <span>9,899 Tons</span>)</div>
                </div>
                <div className='arrow up'><span><FontAwesomeIcon icon={ faArrowUp } /></span></div>
              </div>
              <div className='green-kpi'>
                <div className='division'><span>연간</span></div>
                <div className='summary'>
                  <div>61,820 Tons</div>
                  <div>(2022 : <span>132,981 Tons</span>)</div>
                </div>
                <div className='arrow'><span><FontAwesomeIcon icon={ faArrowDown } /></span></div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}

export default GreenKPIs