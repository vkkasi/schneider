import { Table, Card, CardHeader, CardBody, CardTitle } from 'reactstrap'
import { Settings } from 'react-feather'

const IntergratedEquipmentCondition = () => {
  return (
    <Card className='text-center mb-3'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>통합 장비 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Table striped bordered className='intergrated-equipment-condition'>
          <thead>
            <tr>
              <th rowSpan='2'></th>
              <th colSpan='5'>시설</th>
              <th colSpan='4'>IT</th>
            </tr>
            <tr>
              <th>Power</th>
              <th>Cooling</th>
              <th>환경</th>
              <th>출입</th>
              <th>감시</th>
              <th>Server</th>
              <th>Network</th>
              <th>Rack</th>
              <th>Etc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>수량</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th>전력 사용량</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th>PUE</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
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

export default IntergratedEquipmentCondition