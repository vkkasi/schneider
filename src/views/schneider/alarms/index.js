import { useState } from 'react'
import { Table, Row, Col, Input, Button, Label } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'

import Flatpickr from 'react-flatpickr'
import RealtimeAlarm from './widgets/list'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'


const MainCondition = () => {
  const [picker, setPicker] = useState(new Date())

  const colourOptions = [
    { value: '0', label: '사용자 이름' },
    { value: '1', label: '사용자 연락처' },
    { value: '2', label: '지역 그룹명' },
    { value: '3', label: '단말기 고유번호' },
    { value: '4', label: '사용자 고유번호' }
  ]

  return (
    <>
    <div id='main-condition'>
      {/* <Breadcrumbs
        breadCrumbTitle='통계자료'
        breadCrumbParent='현황 및 통계'
        breadCrumbActive='통계자료'
      /> */}
      <Table bordered className='table-basic'>
        <tbody>
          <tr>
            <th>기준</th>
            <td>
              <div className='form-check form-check-inline  form-check-success'>
                <Input type='checkbox' id='Check0-0' name='Checkbox0' />
                <Label className='form-check-label' for='Check0-0'>
                  위험
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='checkbox' id='Check0-1' name='Checkbox0' />
                <Label className='form-check-label' for='Check0-1'>
                  경고
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='checkbox' id='Check0-2' name='Checkbox0' />
                <Label className='form-check-label' for='Check0-2'>
                  주의
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='checkbox' id='Check0-3' name='Checkbox0' />
                <Label className='form-check-label' for='Check0-3'>
                  일반
                </Label>
              </div>
            </td>
          </tr>
          <tr>
            <th>그룸</th>
            <td>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='radio' id='Radio0-0' name='Checkbox0' />
                <Label className='form-check-label' for='Radio0-0'>
                  대기
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='radio' id='Radio0-1' name='Checkbox0' />
                <Label className='form-check-label' for='Radio0-1'>
                  조치중
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='radio' id='Radio0-2' name='Checkbox0' />
                <Label className='form-check-label' for='Radio0-2'>
                  완료
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='radio' id='Radio0-3' name='Checkbox0' />
                <Label className='form-check-label' for='Radio0-3'>
                  취소
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='radio' id='Radio0-4' name='Checkbox0' />
                <Label className='form-check-label' for='Radio0-4'>
                  숨기기
                </Label>
              </div>
              <div className='form-check form-check-inline form-check-success'>
                <Input type='radio' id='Radio0-5' name='Checkbox0' />
                <Label className='form-check-label' for='Radio0-5'>
                  삭제
                </Label>
              </div>
            </td>
          </tr>
          <tr>
            <th>기간</th>
            <td>
              <Row>
                <Col xs="auto">
                  <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' inline />
                </Col>
                <Col xs="auto">
                  <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' inline />
                </Col>
                <Col xs="auto" style={{alignSelf: 'center'}}>
                  <div className='form-check form-check-inline form-check-success'>
                    <Input type='radio' id='Radio1-0' name='Checkbox0' />
                    <Label className='form-check-label' for='Radio1-0'>
                      시간대별
                    </Label>
                  </div>
                  <div className='form-check form-check-inline form-check-success'>
                    <Input type='radio' id='Radio1-1' name='Checkbox0' />
                    <Label className='form-check-label' for='Radio1-1'>
                      주간
                    </Label>
                  </div>
                  <div className='form-check form-check-inline form-check-success'>
                    <Input type='radio' id='Radio1-2' name='Checkbox0' />
                    <Label className='form-check-label' for='Radio1-2'>
                      월간
                    </Label>
                  </div>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <th>키워드</th>
            <td>
              <Row>
                <Col xs='2'>
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    isClearable={false}
                  />
                </Col>
                <Col xs="auto">
                  <Input type='email' id='basicInput' placeholder='' />
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Button.Ripple color='primary' type='submit' onClick={e => e.preventDefault()}>
            검색
          </Button.Ripple>
        </Col>
      </Row>
      <div className='mt-3' >
        <RealtimeAlarm></RealtimeAlarm>
      </div>
    </div>
  </>
  )
}

export default MainCondition
