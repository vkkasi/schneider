import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

//위젯
import RealtimeEventState from '@src/views/schneider/widget/RealtimeEventState'
import IntergratedPUE from '@src/views/schneider/dashboard/intergrated/IntergratedPUE'


import AlrarmDangerIndex from '@src/views/schneider/widget/AlrarmDangerIndex'
import EnergyUseIndex from '@src/views/schneider/widget/EnergyUseIndex'
import CarbonState from '@src/views/schneider/widget/CarbonState'
import PanelState from '@src/views/schneider/widget/PanelState'
import EnergyEverageUse2 from '@src/views/schneider/widget/EnergyEverageUse2'

import RealtimeAlarm from '../../widget/RealtimeAlarm'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const DashboardIntergrated = () => {
	const context = useContext(ThemeColors)

	const { colors } = useContext(ThemeColors),
	trackBgColor = '#e9ecef'

	return (
		<div id='dashboard-power'>
			<Row className='match-height'>
				<Col xs='3'>
					<IntergratedPUE primary={context.colors.primary.main} danger={context.colors.danger.main} height={300}/>
				</Col>
				<Col xs='9'>
					<AlrarmDangerIndex />
					<EnergyUseIndex />
				</Col>
			</Row>
			<Row className='match-height'>
				<Col xs="6">
					<CarbonState />
				</Col>
				<Col xs="6">
					<EnergyEverageUse2 />
				</Col>
			</Row>
			<Row className='match-height'>
				<Col>
					<PanelState />
				</Col>
			</Row>
			<Row>
				<Col>
				<RealtimeAlarm cate={'PO'}></RealtimeAlarm>
				</Col>
			</Row>
		</div>
	)
}

export default DashboardIntergrated
