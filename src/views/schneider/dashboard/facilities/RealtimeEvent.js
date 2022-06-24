import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import { Settings } from 'react-feather'

const RealtimeEvent = () => {
  const transactionsArr = [
    {
      time: '10:00',
      title: '쿨러 전력 사용량 증가',
      state: 99
    },
    {
      time: '14:00',
      title: '트랙픽 증가',
      state: 4
    },
    {
      time: '14:30',
      title: 'IT 데이터 수집',
      state: 3
    },
    {
      time: '16:00',
      title: 'SEIM 이벤트 데이터 수신',
      state: 2
    },
    {
      time: '16:30',
      title: '트랙픽 증가',
      state: 1
    },
    {
      time: '17:30',
      title: '시설 데이터 수집',
      state: 0
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      let stateClass = ''

      switch (item.state) {
        case 0:
          stateClass = 'bg-primary'
          break
        case 1:
          stateClass = 'bg-secondary'
          break
        case 2:
          stateClass = 'bg-success'
          break
        case 3:
          stateClass = 'bg-danger'
          break
        case 4:
          stateClass = 'bg-warning'
          break
        case 99:
          stateClass = 'bg-info'
          break
      }

        return (
        <>
          <div className={`d-flex justify-content-center work-schedule realtime-event ${stateClass}`}>
            <div className='item text-center p-50'>{item.time}</div>
            <div className='item flex-grow-1'>{item.title}</div>
          </div>
        </>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>Chiller 실시간 이벤트</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default RealtimeEvent
