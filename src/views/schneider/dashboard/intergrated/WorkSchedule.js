import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import { Settings } from 'react-feather'

const WorkSchedule = () => {
  const transactionsArr = [
    {
      time: '10:00',
      title: '대민 서비스 업데이트',
      state: 99
    },
    {
      time: '14:00',
      title: 'FMS 시스템 유지보수',
      state: 1
    },
    {
      time: '14:30',
      title: '방화벽 장비 교체',
      state: 0
    },
    {
      time: '16:00',
      title: '망연계 자비 유지보수',
      state: 0
    },
    {
      time: '16:30',
      title: '방화벽 장비 교체',
      state: 0
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      let stateClass = ''
      let stateText = ''
      switch (item.state) {
        case 0:
          stateClass = 'bg-smarty-blue'
          stateText = '예정'
          break
        case 1:
          stateClass = 'bg-smarty-red'
          stateText = '진행중'
          break
        case 99:
          stateClass = 'bg-smarty-orange'
          stateText = '완료'
          break
        }
      return (
        <>
          <div className={`d-flex justify-content-center work-schedule ${stateClass}`}>
            <div className='item text-center'>{item.time}</div>
            <div className='item flex-grow-1'>{item.title}</div>
            <div className='item item-state w-80px text-center font-weight-bolder'>{stateText}</div>
          </div>
        </>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>작업 일정</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default WorkSchedule