import { useState } from 'react'
import { Table, Row, Col, Input, Button, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'

import ModalDetail from './modal/Detail'

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

  const [activeModalDetail, setActiveModalDetail] = useState(false)

  const handleModalDetail = () => {
    setActiveModalDetail(prev => !prev)
  }

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
        <Card className='mt-3'>
          <CardBody>
            <Table bordered responsive className='table-basic table-resource ta-c'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>분류</th>
                  <th>고유번호</th>
                  <th>명칭</th>
                  <th>IP</th>
                  <th>담당자</th>
                  <th>알람현황</th>
                  <th>버튼</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className='td-number'>2</td>
                  <td>SDC (Small Data Center)</td>
                  <td>ZA00000012</td>
                  <td>apc1A6300</td>
                  <td>192.168.1.20</td>
                  <td>admin1</td>
                  <td className='td-alarm-state'>
                    <div className='table-alarm-state'>
                      <span className='bg-danger'>2</span>
                      <span className='bg-orange'>2</span>
                      <span className='bg-warning'>2</span>
                      <span className='bg-primary'>2</span>
                    </div>
                  </td>
                  <td className='td-buttons'>
                    <div className='table-buttons'>
                      <Button size='sm' color='primary'>
                        장비 바로가기
                      </Button>
                      <Button size='sm' color='secondary' onClick={handleModalDetail}>
                        세부내역 보기
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Pagination className='d-flex mt-3 justify-content-center'>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
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
            </Pagination>
          </CardBody>
        </Card>
      </div>
      <ModalDetail open={activeModalDetail} handleModal={handleModalDetail}/>
    </>
  )
}

export default MainCondition
