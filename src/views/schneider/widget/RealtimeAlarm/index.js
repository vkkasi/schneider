import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'
import { useState } from 'react'

import ModalDetail from '../../dashboard/intergrated/modal/detail'
import ModalOpinion from '../../dashboard/intergrated/modal/opinion'
import ModalMemo from '../../dashboard/intergrated/modal/memo'
import ModalAssignment from '../../dashboard/intergrated/modal/Assignment'

const RealtimeAlarm = () => {
  const [activeModalDetail, setActiveModalDetail] = useState(false)
  const [activeModalMemo, setActiveModalMemo] = useState(false)
  const [activeModalOpinion, setActiveModalOpinion] = useState(false)
  const [activeModalAssignment, setActiveModalAssignment] = useState(false)

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
              <span>5</span>
            </div>
            <div>
              <span className='title bg-smarty-orange'>중요</span>
              <span>5</span>
            </div>
            <div>
              <span className='title bg-smarty-green'>경고</span>
              <span>5</span>
            </div>
            <div>
              <span className='title bg-smarty-blue'>일반</span>
              <span>5</span>
            </div>
          </div>
          <div className='list'>
            <div className='number'><span>53</span></div>
            <div className='contents'>
              <h3>회로 차단기 트립</h3>
              <div className='desc'>구로 - 회로 차단기 알람</div>
              <div className='time'>2022.02.15 14:24:22</div>
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
                    <td>HVAC alarms</td>
                    <td>Admin1</td>
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
          <div className='list'>
            <div className='number bg-smarty-green'><span>53</span></div>
            <div className='contents'>
              <h3>회로 차단기 트립</h3>
              <div className='desc'>구로 - 회로 차단기 알람</div>
              <div className='time'>2022.02.15 14:24:22</div>
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
                    <td>HVAC alarms</td>
                    <td>Admin1</td>
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