import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'

const SystemCondition = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>시설 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Table striped bordered className='intergrated-equipment-condition'>
          <thead>
            <tr>
              <th>건물점유</th>
              <th>건물모드</th>
              <th>침입경보</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>미점유</td>
              <td>미구동</td>
              <td>활성화</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered className='intergrated-equipment-condition mt-1'>
          <thead>
            <tr>
              <th>AHU</th>
              <th>Power Mode</th>
              <th>Power</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>미구동</td>
              <td>Low</td>
              <td>75kW</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default SystemCondition