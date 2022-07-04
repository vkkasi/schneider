import { useEffect, useState } from 'react'
import { Table, Row, Col, Input, Card, CardBody, Button, Label,  Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'

import Flatpickr from 'react-flatpickr'
import RealtimeAlarm from '@src/views/schneider/widget/RealtimeAlarm'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'


const MainCondition = () => {
  const [picker, setPicker] = useState(new Date())
  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)


  const colourOptions = [
    { value: '0', label: '장비명' }
  ]

  // API에서 자원데이터 가져오기
  function getData() {
    fetch(`http://www.boan2da.com/api/index.php?strApiName=apiGetAlarmInfo`)
    .then(response => response.json())
    .then(response => {
      setData(response.arrResultData.arrList)
      console.log(response);
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  

  // getData();  


  const renderTr = () => {
    console.log(data);
    return data.map((item) => {
      return (
        <tr>
          <td className='td-number'>{item.c_idx}</td>
          <td>{item.c_severity}</td>
          <td>{item.c_asset_name}</td>
          <td>{item.c_label}</td>
          <td>{item.c_message}</td>
          <td>{item.c_state}</td>
          <td>apcAdmin</td>
          <td>{item.c_activated_dt}</td>
          <td className='td-buttons'>
            <div className='table-buttons'>
              <Button size='sm' color='primary'>
                장비 바로가기
              </Button>
              {/*<Button size='sm' color='secondary' onClick={ () => handleModalDetail(item)}>
                세부내역 보기
      </Button>*/}
            </div>
          </td>
        </tr>
      )
    })
  }

  useEffect(() => {
    getData(); 
  }, [])
  
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
              {/*<div className='form-check form-check-inline form-check-success'>
                <Input type='checkbox' id='Check0-1' name='Checkbox0' />
                <Label className='form-check-label' for='Check0-1'>
                  경고
                </Label>
              </div>
              */}
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
      <Card className='mt-3'>
          <CardBody>
            <Table bordered responsive className='table-basic table-resource ta-c'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>분류</th>
                  <th>장비</th>
                  <th>라벨</th>
                  <th>알람명</th>
                  <th>처리상태</th>
                  <th>담당자</th>
                  <th>발생일</th>
                  <th>버튼</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ? renderTr() : ''}
              </tbody>
            </Table>
            <Pagination className='d-flex mt-3 justify-content-center'>
              <PaginationItem active>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              {/*
              <PaginationItem>
                <PaginationLink href='#'>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href='#'>4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>6</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>7</PaginationLink>
              </PaginationItem>
              */}
            </Pagination>
          </CardBody>
        </Card>
        { /*<RealtimeAlarm isPage={true} category={"all"} /> */}
      </div>
    </div>
  </>
  )
}

export default MainCondition
