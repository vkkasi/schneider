import { Card, CardHeader, CardTitle, CardBody, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Settings } from 'react-feather'
import { useEffect, useState } from 'react'

import ModalDetail from '../../dashboard/intergrated/modal/detail'
import ModalOpinion from '../../dashboard/intergrated/modal/opinion'
import ModalMemo from '../../dashboard/intergrated/modal/memo'
import ModalAssignment from '../../dashboard/intergrated/modal/Assignment'
import { getDatasetAtEvent } from 'react-chartjs-2'
import { get } from 'jquery'

const RealtimeAlarm = ({ cate }) => {
  const [activeModalDetail, setActiveModalDetail] = useState(false)
  const [activeModalMemo, setActiveModalMemo] = useState(false)
  const [activeModalOpinion, setActiveModalOpinion] = useState(false)
  const [activeModalAssignment, setActiveModalAssignment] = useState(false)
  const [curruntPage, setCurruntPage] = useState('1')
  const [data, setData] = useState(null)

  const handleModalDetail = () => {
    setActiveModalDetail(prev => !prev)
  }

  const handleModalOpinion = () => {
    setActiveModalOpinion(prev => !prev)
  }

  const handleModalMemo = () => {
    setActiveModalMemo(prev => !prev)
  }

  const handleModalAssignment = () => {
    setActiveModalAssignment(prev => !prev)
  }

  const renderDOM = () => {
    return data.map((item, idx) => {
      return (
        <div key={idx} className='list'>
            <div className='number'><span>{item.c_idx}</span></div>
            <div className='contents'>
              <h3>{item.c_label}</h3>
              <div className='desc'>{item.c_message}</div>
              <div className='time'>{item.c_activated_dt}</div>
            </div>
            <div className='class'>
              <Table striped bordered className='intergrated-equipment-condition'>
                <thead>
                  <tr>
                    <th>분류</th>
                    <th>담당자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.c_label}</td>
                    <td>apcAdmin</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='buttons'>
              <div className='group-0'>
                <span className='btn bg-smarty-purple' onClick={handleModalDetail}>상세내역</span>
              </div>
              <div className='group-1'>
                <div>
                  <div><span className='btn bg-smarty-blue'>확인</span></div>
                  <div><span className='btn bg-smarty-blue' onClick={handleModalMemo}>메모</span></div>
                </div>
                <div>
                  <div><span className='btn bg-smarty-blue' onClick={handleModalOpinion}>의견등록</span></div>
                  <div><span className='btn bg-smarty-blue' onClick={handleModalAssignment}>담당배정</span></div>
                </div>
              </div>
            </div>
          </div>
      )
    })
  }

  // API에서 자원데이터 가져오기
  function getData(intPage, strCate) {
    fetch(`http://www.boan2da.com/api/index.php?strApiName=apiGetAlarmInfo&intPage=${intPage}&strCate=${strCate}`)
    .then(response => response.json())
    .then(response => {
      console.log('response', response);
      setData(response.arrResultData.arrList)
    })
    .catch(error => {
      console.log('error', error);
    })
  }
  
  useEffect(() => {
    console.log('cate', cate)
    getData(curruntPage, cate)
  }, [curruntPage])

  return (
    <>
      <Card className='card-realtime-alarm'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>실시간 알람</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='divide'>
            <div>
              <span className='title bg-smarty-red'>위험</span>
              <span>4</span>
            </div>
            <div>
              <span className='title bg-smarty-orange'>경고</span>
              <span>3</span>
            </div>
            {/*<div>
              <span className='title bg-smarty-green'>경고</span>
              <span>5</span>
            </div>
            */}
            <div>
              <span className='title bg-smarty-blue'>일반</span>
              <span>3</span>
            </div>
          </div>
          <div className='box-realtime-list'>
            {data && data.length > 0 ? renderDOM() : ''}
          </div>
          
          
          <Pagination className='d-flex mt-3 justify-content-center'>
            <PaginationItem active={curruntPage === '1'}>
              <PaginationLink onClick={() => setCurruntPage('1')}>1</PaginationLink>
            </PaginationItem>
            {/*<PaginationItem active={curruntPage === '2'}>
              <PaginationLink onClick={() => setCurruntPage('2')}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem active={curruntPage === '3'}>
              <PaginationLink onClick={() => setCurruntPage('3')}>3</PaginationLink>
            </PaginationItem>
            <PaginationItem active={curruntPage === '4'}>
              <PaginationLink onClick={() => setCurruntPage('4')}>4</PaginationLink>
            </PaginationItem>
            <PaginationItem active={curruntPage === '5'}>
              <PaginationLink onClick={() => setCurruntPage('5')}>5</PaginationLink>
            </PaginationItem>
            <PaginationItem active={curruntPage === '6'}>
              <PaginationLink onClick={() => setCurruntPage('6')}>6</PaginationLink>
            </PaginationItem>
            <PaginationItem active={curruntPage === '7'}>
              <PaginationLink onClick={() => setCurruntPage('7')}>7</PaginationLink>
            </PaginationItem>
          */}
          </Pagination>
        </CardBody>
      </Card>
      <ModalDetail open={activeModalDetail} handleModal={handleModalDetail}/>
      <ModalOpinion open={activeModalOpinion} handleModal={handleModalOpinion}/>
      <ModalMemo open={activeModalMemo} handleModal={handleModalMemo}/>
      <ModalAssignment open={activeModalAssignment} handleModal={handleModalAssignment}/>
    </>
  )
}

export default RealtimeAlarm