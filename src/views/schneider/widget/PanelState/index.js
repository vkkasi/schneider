import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'

const PanelState = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>층간 메인판넬 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Table striped bordered className='intergrated-equipment-condition'>
          <thead>
            <tr>
              <th></th>
              <th>최대수요전력</th>
              <th>토탈 역률</th>
              <th>선간전압 평균</th>
              <th>상전류 평균</th>
              <th>유효</th>
              <th>무효</th>
              <th>피상전력 토탈</th>
              <th>적산전력량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>PN - 1F – 001 (H)</th>
              <td>781</td>
              <td>95.0</td>
              <td>481</td>
              <td>394</td>
              <td>103</td>
              <td>329</td>
              <td>312</td>
              <td>1,228</td>
            </tr>
            <tr>
              <th>PN - 2F – 001 (H)</th>
              <td>781</td>
              <td>95.0</td>
              <td>481</td>
              <td>394</td>
              <td>103</td>
              <td>329</td>
              <td>312</td>
              <td>1,228</td>
            </tr>
            <tr>
              <th>PN - 1F – 002 (L)</th>
              <td>781</td>
              <td>95.0</td>
              <td>481</td>
              <td>394</td>
              <td>103</td>
              <td>329</td>
              <td>312</td>
              <td>1,228</td>
            </tr>
            <tr>
              <th>PN - 2F – 002 (L)</th>
              <td>781</td>
              <td>95.0</td>
              <td>481</td>
              <td>394</td>
              <td>103</td>
              <td>329</td>
              <td>312</td>
              <td>1,228</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default PanelState