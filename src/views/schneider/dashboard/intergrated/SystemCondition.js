import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'

const SystemCondition = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>시스템 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Table striped bordered className='intergrated-equipment-condition'>
          <thead>
            <tr>
              <th>보안</th>
              <th>운영/관리</th>
              <th>서비스</th>
              <th>시설</th>
              <th>기타</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default SystemCondition