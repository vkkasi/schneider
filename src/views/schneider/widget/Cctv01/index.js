import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { Settings } from 'react-feather'

const Cctv = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>CCTV-002</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
      <img className="install-img" alt="iPhone_01" src="/images/s02.jpg" />
      </CardBody>
    </Card>
  )
}

export default Cctv