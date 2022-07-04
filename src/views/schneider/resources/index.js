import { useEffect, useState } from 'react'
import { Table, Row, Col, Input, Button, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'

import ModalDetail from './modal/Detail'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'


const MainCondition = () => {
  const [picker, setPicker] = useState(new Date())
  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)

  const colourOptions = [
    { value: '0', label: '장비명' },
    { value: '1', label: '모델' },
    { value: '2', label: '시리얼번호' }
  ]

  const [activeModalDetail, setActiveModalDetail] = useState(false)

  const handleModalDetail = (item) => {
   
    console.log(item);
    setData2(item)
    setActiveModalDetail(prev => !prev)
  }

  // API에서 자원데이터 가져오기
  function getData() {
    fetch(`http://www.boan2da.com/api/index.php?strApiName=apiGetResourceInfo`)
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
          <td>{item.c_type}</td>
          <td>{item.c_serial_number}</td>
          <td>{item.c_name}</td>
          <td>{item.c_ip_addr}</td>
          <td>{item.c_manufacturer}</td>
          <td className='td-alarm-state'>
            <div className='table-alarm-state'>
              <span className='bg-danger'>0</span>
              <span className='bg-warning'>0</span>
              <span className='bg-primary'>0</span>
            </div>
          </td>
          <td className='td-buttons'>
            <div className='table-buttons'>
              <Button size='sm' color='primary'>
                장비 바로가기
              </Button>
              <Button size='sm' color='secondary' onClick={ () => handleModalDetail(item)}>
                세부내역 보기
              </Button>
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
                    <Input type='text' id='sch_keyword' placeholder='' />
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
      </div>
      <ModalDetail open={activeModalDetail} handleModal={handleModalDetail} data2={data2}/>
    </>
  )
}

export default MainCondition
