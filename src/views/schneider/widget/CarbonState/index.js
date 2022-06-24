import { Card, CardHeader, CardTitle, CardBody, Table, ButtonGroup, Button } from 'reactstrap'
import { Settings } from 'react-feather'

const CarbonState = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>에너지 사용량 대비 탄소 배출 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div className='d-flex justify-content-end mb-1'>
          <ButtonGroup className='mt-md-0 mt-1'>
            <Button active={true} color='secondary' size='sm' outline>
              일
            </Button>
            <Button active={false} color='primary' size='sm' outline>
              주
            </Button>
            <Button active={false} color='info' size='sm' outline>
              월
            </Button>
            <Button active={false} color='success' size='sm' outline>
              연
            </Button>
          </ButtonGroup>
        </div>
        <Table striped bordered className='intergrated-equipment-condition'>
          <thead>
            <tr>
              <th></th>
              <th>전기</th>
              <th>물</th>
              <th>가스</th>
              <th>공기</th>
              <th>스팀</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>사용량</th>
              <td>1,375 kWh</td>
              <td>350 ㎥</td>
              <td>485 ㎥</td>
              <td>37</td>
              <td>5</td>
            </tr>
            <tr>
              <th>탄소 발생량 (Ton)</th>
              <td>0.5</td>
              <td>0.25</td>
              <td>0.74</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th>목표 탄소 발생량</th>
              <td>0.75</td>
              <td>0.15</td>
              <td>1.0</td>
              <td>0.1</td>
              <td>0.1</td>
            </tr>
            <tr>
              <th>도달 지수</th>
              <td>+ 0.25</td>
              <td>- 0.1</td>
              <td>+ 0.26</td>
              <td>+ 0.1</td>
              <td>+ 0.1</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default CarbonState