/* eslint-disable object-shorthand */
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Settings } from 'react-feather'

import Timeline from '@components/timeline'

const WidgetTimeLine = () => {
  const data = [
    {
      title: '백본 장비교체',
      content: '인포시즈',
      color: 'primary',
      meta: '10:00',
      metaClassName: 'mr-1',
      customContent: ''
    },
    {
      title: '서버 점검',
      content: 'IBM',
      color: 'warning',
      meta: '13:00',
      metaClassName: 'mr-1',
      customContent: ''
    },
    {
      title: '망연계 유지보수',
      content: '세타랩',
      color: 'info',
      meta: '15:00',
      metaClassName: 'mr-1',
      customContent: ''
    }
  ]

  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>1F 작업일정</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Timeline className='ml-50 mb-0' data={data} />
      </CardBody>
    </Card>
  )
}

export default WidgetTimeLine