import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import CompanyTable from './CompanyTable'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

// 슈나이더 view
import IntergratedEquipmentCondition from '@src/views/schneider/dashboard/intergrated/IntergratedEquipmentCondition'
import IntergratedPUE from '@src/views/schneider/dashboard/intergrated/IntergratedPUE'
import EnergyUse from '@src/views/schneider/widget/EnergyUse'
import EnergyCondition from '@src/views/schneider/dashboard/intergrated/EnergyCondition'
import SystemCondition from '@src/views/schneider/dashboard/intergrated/SystemCondition'
import WorkSchedule from '@src/views/schneider/dashboard/intergrated/WorkSchedule'
import RealtimeEvent from '@src/views/schneider/dashboard/intergrated/RealtimeEvent'

//위젯
import GreenKPIs from '../../widget/GreenKPIs'
import EnergyEverageUse from '../../widget/EnergyEverageUse'
import EnergyEverageCost from '../../widget/EnergyEverageCost'
import IntergratedTemperatureHumidityState from '../../widget/IntergratedTemperatureHumidityState'
import AlarmState from '../../widget/AlamState'
import FacilityState from '../../widget/FacilityState'
import RealtimeAlarm from '../../widget/RealtimeAlarm'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import RadarCharts from '../../widget/apexcharts/RadarCharts'

const DashboardIntergrated = () => {
  const context = useContext(ThemeColors)
  
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xs='4'>
          <Row className='match-height'>
            <Col xs='8'>
              <GreenKPIs />
            </Col>
            <Col xs='4'>
              <IntergratedPUE primary={context.colors.primary.main} danger={context.colors.danger.main} height={210} />
            </Col>
          </Row>
          <IntergratedTemperatureHumidityState />
        </Col>
        <Col xs='4'>
			    <RadarCharts title={'오늘 이벤트 분포도'}/>
          {/* <EnergyEverageUse /> */}
        </Col>
        <Col xs='4'>
          <EnergyEverageCost />
          <FacilityState />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='4'>
        </Col>
        <Col xs='4'>
          {/* <AlarmState /> */}
        </Col>
        <Col xs='4'>
        </Col>
      </Row>
      <Row>
        <Col>
          <RealtimeAlarm></RealtimeAlarm>
        </Col>
      </Row>

      {/* <Row className='match-height'>
        <Col>
          <IntergratedEquipmentCondition />
        </Col>
      </Row> */}

      {/* <Row className='match-height'>
        <Col xs='2'>
          날씨 위젯
        </Col>
        <Col xs='2'>
          <IntergratedPUE primary={context.colors.primary.main} danger={context.colors.danger.main} />
        </Col>
        <Col xs='8'>
          <EnergyUse />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='4'>
          <Row className='match-height'>
            <Col xs='12'>
              <EnergyCondition />
            </Col>
            <Col sm='12'>
              <SystemCondition />
            </Col>
          </Row>
        </Col>
        <Col xs='8'>
          <Row className='match-height'>
            <Col xs='6'>
              <WorkSchedule />
            </Col>
            <Col xs='6'>
              <RealtimeEvent />
            </Col>
          </Row>
        </Col>
      </Row> */}

      {/* <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal />
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
        <Col xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <OrdersBarChart warning={colors.warning.main} />
            </Col>
            <Col lg='6' md='3' xs='6'>
              <ProfitLineChart info={colors.info.main} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
        </Col>
        <Col lg='8' md='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardMeetup />
        </Col>
        <Col xs='12'>
          <CompanyTable />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <GoalOverview success={colors.success.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
      </Row> */}
    </div>
  )
}

export default DashboardIntergrated
