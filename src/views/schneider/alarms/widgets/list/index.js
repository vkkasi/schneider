import { Card, CardHeader, CardTitle, CardBody, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Settings } from 'react-feather'
import { useState } from 'react'

import ModalDetail from '../../modal/detail'

const RealtimeAlarm = () => {
  const [activeModalDetail, setActiveModalDetail] = useState(false)

  const handleModalDetail = () => {
    setActiveModalDetail(prev => !prev)
  }

  return (
    <>
      <Card className='card-realtime-alarm'>
        <CardHeader className='justify-content-center'>
          <CardTitle className='ta-c' tag='h4'>실시간 알람</CardTitle>
        </CardHeader>
        <CardBody>
          <div className='list'>
            <div className='number bg-danger'><span className='text'>위험</span></div>
            <div className='contents'>
              <h3>회로 차단기 트립</h3>
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
                    <td>DOOR alams</td>
                    <td>Admin1</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='buttons'>
              <div className='group-0'>
                <span className='btn bg-primary' onClick={handleModalDetail}>상세내역</span>
              </div>
            </div>
          </div>
          <div className='list'>
            <div className='number bg-danger'><span className='text'>위험</span></div>
            <div className='contents'>
              <h3>회로 차단기 트립</h3>
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
                    <td>DOOR alams</td>
                    <td>Admin1</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='buttons'>
              <div className='group-0'>
                <span className='btn bg-primary' onClick={handleModalDetail}>상세내역</span>
              </div>
            </div>
          </div>
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
      <ModalDetail open={activeModalDetail} handleModal={handleModalDetail}/>
    </>
  )
}

export default RealtimeAlarm