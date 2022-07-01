import { useState } from 'react'
import { Row, Col } from 'reactstrap'

//위젯
import Widget from '@src/views/schneider/widget/installation/Widget'
import CircleIndicator from '@src/views/schneider/widget/installation/CircleIndicator'
import RealtimeEventState from '@src/views/schneider/widget/RealtimeEventState'
import EnergyUse from '@src/views/schneider/widget/EnergyUse'
import EnergyUse2 from '@src/views/schneider/widget/EnergyUse2'
import HeatMap from '@src/views/schneider/widget/HeatMap'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const arrayWidget1 = [
  {
    name: 'ABC 상태',
    state: 'Off'
  },
  {
    name: '상태감시',
    state: 'Off'
  }
]

const arrayWidget2 = [
  {
    name: '히터 상태',
    state: '정상'
  },
  {
    name: '고습 장애',
    state: '정상'
  },
  {
    name: 'FAN 경보',
    state: '정상'
  },
  {
    name: '설정 온도',
    state: '25'
  },
  {
    name: '설정 습도',
    state: '15'
  },
  {
    name: '급/배수 출력',
    state: '85'
  },
  {
    name: '급2/배수2 출력',
    state: '32'
  }
]

const arrayWidget3 = [
  {
    name: '타워 상태',
    state: '정상'
  },
  {
    name: '펌프 상태',
    state: '정상'
  },
  {
    name: '배관 온도',
    state: '21.5'
  },
  {
    name: '탱크 수위',
    state: '8'
  }
]

const arrayWidget4 = [
  {
    name: 'By Pass',
    state: '정상'
  },
  {
    name: 'BLD 감시',
    state: '정상'
  },
  {
    name: '알람 상태',
    state: '정상'
  },
  {
    name: '전류 상태',
    state: '정상'
  },
  {
    name: '전압 상태',
    state: '정상'
  },
  {
    name: '베터리 상태',
    state: '정상'
  }
]

const arrayWidget5 = [
  {
    name: 'M-RS',
    state: '정상'
  },
  {
    name: 'M-ST',
    state: '정상'
  },
  {
    name: 'M-TR',
    state: '정상'
  },
  {
    name: 'S-RS',
    state: '정상'
  },
  {
    name: 'S-ST',
    state: '정상'
  },
  {
    name: 'S-TR',
    state: '정상'
  }
]

const arrayWidget6 = [
  {
    name: '온도',
    state: '22.8'
  },
  {
    name: '습도',
    state: '12'
  },
  {
    name: '센서 상태',
    state: '정상'
  },
  {
    name: '경보 상태',
    state: '정상'
  }
]

const arrayWidget7 = [
  {
    name: '발생여부',
    state: '정상'
  },
  {
    name: '감지선 단선여부',
    state: '정상'
  },
  {
    name: '경보 상태',
    state: '정상'
  }
]

const arrayWidget8 = [
  {
    name: '상태',
    state: '정상'
  },
  {
    name: '경보 상태',
    state: '정상'
  }
]

const arrayWidget9 = [
  {
    name: '감시 상태',
    state: '정상'
  }
]

const arrayWidget10 = [
  {
    name: '감시 상태',
    state: '정상'
  }
]
const DashboardIntergrated = () => {
  const [list, setList] = useState([
    {
      bg: 'blue',
      title: '비상발전기',
      data: arrayWidget1,
      fms_yn: true,
      rows : 1
    },
    {
      bg: 'blue',
      title: '항온항습기',
      data: arrayWidget2,
      fms_yn: true,
      rows : 2
    },
    {
      bg: 'blue',
      title: '공조설비',
      data: arrayWidget3,
      fms_yn: true,
      rows : 2
    },
    {
      bg: 'blue',
      title: 'UPS',
      data: arrayWidget4,
      fms_yn: false,
      rows : 2
    },
    {
      bg: 'blue',
      title: 'STS',
      data: arrayWidget5,
      fms_yn: false,
      rows : 2
    },
    {
      bg: 'blue',
      title: '온도/습도 센서',
      data: arrayWidget6,
      fms_yn: false,
      rows : 2
    },
    {
      bg: 'blue',
      title: '누수 감지선',
      data: arrayWidget7,
      fms_yn: false,
      rows : 1
    },
    {
      bg: 'blue',
      title: '소방설비',
      data: arrayWidget8,
      fms_yn: false,
      rows : 1
    },
    {
      bg: 'orange',
      title: 'CCTV',
      data: arrayWidget9,
      fms_yn: false,
      rows : 1
    },
    {
      bg: 'red',
      title: 'DOOR',
      data: arrayWidget10,
      fms_yn: false,
      rows : 1
    }
  ])
  
  const renderWidget = (arr) => {
    return arr.map((item, index) => (
      <Col xs='3' key={index}>
        <Widget options={item}></Widget>
      </Col>
    ))
  }

  return (
    <div id='dashboard-installation'>
      <CircleIndicator />
      <Row className='match-height'>
        <Col xs='6'>
          <EnergyUse />
        </Col>
        <Col xs='6'>
          <HeatMap />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          <EnergyUse2 />
        </Col>
      </Row>
      <Row className='match-height'>
        {renderWidget(list)}
      </Row>
      <RealtimeEventState />
    </div>
  )
}

export default DashboardIntergrated
