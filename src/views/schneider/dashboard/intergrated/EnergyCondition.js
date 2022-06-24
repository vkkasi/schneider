import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Settings } from 'react-feather'

const EnergyCondition = () => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>에너지 현황</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div className='d-flex energy-condition justify-content-between'>
          <div className='title'>총 사용량(월)</div>
          <div className='value'>
            <div>876.6kW</div>
            <div className='txt-prev'>(-108kW)</div>
          </div>
        </div>
        <div className='d-flex energy-condition justify-content-between'>
          <div className='title'>비용(월)</div>
          <div className='value'>
            <div>&#8361; 12,768,570</div>
            <div className='txt-prev'>(&#8361; -618,175)</div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default EnergyCondition