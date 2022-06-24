import { Card, CardHeader, CardTitle, CardBody, Input } from 'reactstrap'
import { Settings, Check, X } from 'react-feather'

import SliderValues from './sliders/SliderValues'
import SliderScalePips from './sliders/SliderScalePips'
import SliderColors from './sliders/SliderColors'
import SoftLimits from './sliders/SoftLimits'

const Label = () => (
  <>
    <span className='switch-icon-left'>
      On
    </span>
    <span className='switch-icon-right'>
      Off
    </span>
  </>
)

const WorkSchedule = () => {
  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>Chiller 설정</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>전원</div>
          <div className='item flex-grow-1'>
            <Input
              type='switch'
              label={<Label />}
              className='custom-control-danger'
              id='icon-danger'
              name='icon-danger'
              inline
              defaultChecked
            />
          </div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>출력 1</div>
          <div className='item flex-grow-1'><SliderValues /></div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>출력 2</div>
          <div className='item flex-grow-1'><SliderScalePips /></div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>출력 3</div>
          <div className='item flex-grow-1'><SliderColors /></div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>출력 4</div>
          <div className='item flex-grow-1'><SoftLimits /></div>
        </div>
      </CardBody>
    </Card>
  )
}

export default WorkSchedule