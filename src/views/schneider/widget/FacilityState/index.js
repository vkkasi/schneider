import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'

const SystemCondition = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>시설 평균 사용률 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Table striped bordered className='intergrated-equipment-condition'>
          <thead>
            <tr>
              <th>1F 상면</th>
              <th>2F 상면</th>
              <th>3F 상면</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>30%</td>
              <td>60%</td>
              <td>45%</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered className='intergrated-equipment-condition mt-1'>
          <thead>
            <tr>
              <th>RACK </th>
              <th>POWER </th>
              <th>COOLING</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>50%</td>
              <td>75%</td>
              <td>80%</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default SystemCondition