import { Card, CardHeader, CardTitle, CardBody, Row, Col, ButtonGroup, Button, TabContent, TabPane } from 'reactstrap'
import { Settings } from 'react-feather'

const AlarmState = ({ num }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>{num}F 시설 현황</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='alarm-warning-indicator'>
            <div className='item'>
              <div className='title'>외부 온도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-red'>위험</span>
                <span>37.6</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>외부 습도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-orange'>중요</span>
                <span>25</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>내부 온도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-red'>위험</span>
                <span>37.6</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>내부 습도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-blue'>일반</span>
                <span>12</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>공조실 온도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-green'>경고</span>
                <span>20.4</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>공조실 습도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-green'>경고</span>
                <span>12</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>공조실 CO2</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-blue'>일반</span>
                <span>11</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>기계실 온도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-orange'>중요</span>
                <span>21.2</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>기계실 습도</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-red'>위험</span>
                <span>12</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>누수 여부</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-blue'>일반</span>
                <span>정상</span>
              </div>
            </div>
            <div className='item'>
              <div className='title'>고수위 여부</div>
              <div className='divide'>
                <span className='text-alert bg-smarty-blue'>일반</span>
                <span>정상</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default AlarmState