import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import _ from 'lodash'

import WidgetTimeLine from 	"@src/views/schneider/dashboard/it/WidgetTimeLine";
import EnergyUse from 		"@src/views/schneider/widget/EnergyUse";
import EnergyUse2 from 		"@src/views/schneider/widget/EnergyUse2";
import GreenKPIs from 		"@src/views/schneider/widget/GreenKPIs";
import Weather from 		"@src/views/schneider/widget/weather";
import RealtimeAlarm from 	"@src/views/schneider/widget/RealtimeAlarm";
import Default from 		"@src/views/schneider/widget/Default";

// Modal
import ModalSetting from './modal/Setting'

import styled from "styled-components";

const WidgetContent = ({ idx, handleModalSetting }) => {
	const [widgetDetail, setWidgetDetail] = useState([])

	const store = useSelector(state => state.gridLayout);

	useEffect(() => {
		const date = new Date();
      	const tmpIdx = date.getTime();

		idx === 0 ? setWidgetDetail({ idx: tmpIdx, type: 'default' }) : setWidgetDetail(_.find(store.tmpWidgetDetail, {idx: idx}))
	}, [])

	const renderDOM = () => {
	  let returnComponent = null;

		switch (widgetDetail.type) {
			case 'weather':
				returnComponent = <Weather />
				break;
			case 'reatimeAlarm':
				returnComponent = <RealtimeAlarm />
				break;
			case 'timeUseAmount':
				returnComponent = <EnergyUse />
				break;
			case 'workSchedule':
				returnComponent = <WidgetTimeLine />
				break;
			case 'timeTempHumi':
				returnComponent = <EnergyUse2 />
				break;
			case 'greenKpis':
				returnComponent = <GreenKPIs />
				break;
			default:
				returnComponent = <Default />
				break;
			}

	  return returnComponent
	}

	return (
		<>
			{renderDOM()}
			{/* <ModalSetting open={isOpenSetting} handleModal={handleModalSetting}  /> */}
		</>
	)
}

export default WidgetContent

const TopButtonsBox = styled.div`
	> button + button {
		margin-left: .5rem;
	}
`