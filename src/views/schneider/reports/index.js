import { useState } from 'react'
import { Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'

import Flatpickr from 'react-flatpickr'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

import PerfectScrollbar from 'react-perfect-scrollbar'

import ReportForm from './form/'

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
      <Row className='match-height'>
        <Col xs='2'>
          <Card className='card-report-side'>
            <CardHeader>
              서식
            </CardHeader>
            <CardBody>
              <PerfectScrollbar className='report-buttons-area'>
                <Button>보고서 양식 1</Button>
                <Button>보고서 양식 2</Button>
                <Button>보고서 양식 3</Button>
                <Button>보고서 양식 4</Button>
                <Button>보고서 양식 5</Button>
                <Button>보고서 양식 6</Button>
                <Button>보고서 양식 7</Button>
                <Button>보고서 양식 8</Button>
                <Button>보고서 양식 9</Button>
                <Button>보고서 양식 10</Button>
                <Button>보고서 양식 11</Button>
                <Button>보고서 양식 12</Button>
                <Button>보고서 양식 13</Button>
                <Button>보고서 양식 14</Button>
                <Button>보고서 양식 15</Button>
              </PerfectScrollbar>
            </CardBody>
          </Card>
        </Col>
        <Col xs='8'>
          <Card className='card-report-side bg-white'>
            <CardBody>
              <ReportForm></ReportForm>
            </CardBody>
          </Card>
        </Col>
        <Col xs='2'>
          <Card className='card-report-side'>
            <CardHeader>
            조건
            </CardHeader>
            <CardBody>
              <PerfectScrollbar className='report-buttons-area'>
                <Button>기간</Button>
                <Button>분류</Button>
                <Button>담당자</Button>
              </PerfectScrollbar>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div className='box-buttons'>
        <Button color='info'>미리보기</Button>
        <Button color='primary'>출력하기</Button>
        <Button color='success'>다운로드</Button>
      </div>
    </>
  )
}

export default MainCondition
