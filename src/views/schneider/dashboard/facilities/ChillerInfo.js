import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import { Settings } from 'react-feather'

const WorkSchedule = () => {
  const transactionsArr = [
    {
      name: '시설명',
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
          stateClass = 'text-primary'
          stateText = '예정'
          break
        case 1:
          stateClass = 'text-danger'
          stateText = '진행중'
          break
        case 99:
          stateClass = 'text-secondary'
          stateText = '완료'
          break
        }
      return (
        <>
          <div className='d-flex justify-content-center work-schedule'>
            <div className='item text-center p-50'>{item.time}</div>
            <div className='item flex-grow-1'>{item.title}</div>
            <div className={`item w-60px text-center font-weight-bolder ${stateClass}`}>{stateText}</div>
          </div>
        </>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>Chiller 정보</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>시설명</div>
          <div className='item flex-grow-1'>Chiller</div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>모델명</div>
          <div className='item flex-grow-1'>Sch Chiler A03</div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>제조사</div>
          <div className='item flex-grow-1'>슈나이더 일렉트릭</div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>공급사</div>
          <div className='item flex-grow-1'>인포시즈</div>
        </div>
        <div className='d-flex justify-content-center work-schedule'>
          <div className='item text-center p-50'>당당자</div>
          <div className='item flex-grow-1'>홍길동</div>
        </div>
      </CardBody>
    </Card>
  )
}

export default WorkSchedule