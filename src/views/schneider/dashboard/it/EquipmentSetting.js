import { useState } from 'react'

import { Card, CardHeader, CardTitle, CardBody, Media, Input, Button, ButtonGroup } from 'reactstrap'
import { Settings, Check, X } from 'react-feather'

import SliderValues from './sliders/SliderValues'

import '@styles/react/libs/noui-slider/noui-slider.scss'

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

const EquipmentSetting = () => {
  const [rSelected, setRSelected] = useState(1)

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>1F 시설 설정</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div className='d-flex justify-content-center work-schedule equipment-setting'>
          <div className='item text-center p-50 d-flex justify-content-center align-items-center'><span>평균 온도 설정</span></div>
          <div className='item flex-grow-1 p-2'><SliderValues /></div>
          <div className='item d-flex justify-content-center align-items-center'><span>22.5도</span></div>
        </div>
        <div className='d-flex justify-content-center work-schedule equipment-setting'>
          <div className='item text-center p-50 d-flex justify-content-center align-items-center'><span>항온항습기</span></div>
          <div className='item flex-grow-1 p-1'>
            <Input
              type='switch'
              label={<Label />}
              className='custom-control-primary'
              id='switch-1'
              name='icon-danger'
              inline
              defaultChecked
            />
          </div>
          <div className='item d-flex justify-content-center align-items-center'><span>가동중</span></div>
        </div>
        <div className='d-flex justify-content-center work-schedule equipment-setting'>
          <div className='item text-center p-50 d-flex justify-content-center align-items-center'><span>조명</span></div>
          <div className='item flex-grow-1 p-1'>
            <ButtonGroup>
            <Button color='success' onClick={() => setRSelected(1)} active={rSelected === 1}>
              전체 소등
            </Button>
            <Button color='success' onClick={() => setRSelected(2)} active={rSelected === 2}>
              전체 점등
            </Button>
          </ButtonGroup>
          </div>
        </div>
        <div className='d-flex justify-content-center work-schedule equipment-setting'>
          <div className='item text-center p-50 d-flex justify-content-center align-items-center'><span>환풍기</span></div>
          <div className='item flex-grow-1 p-1'>
            <Input
              type='switch'
              label={<Label />}
              className='custom-control-primary'
              id='switch-2'
              name='icon-danger'
              inline
              defaultChecked
            />
          </div>
          <div className='item d-flex justify-content-center align-items-center'><span>가동중</span></div>
        </div>
      </CardBody>
    </Card>
  )
}

export default EquipmentSetting