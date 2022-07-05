import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'

const SystemCondition = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>날씨 위젯</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        
      </CardBody>
    </Card>
  )
}

export default SystemCondition