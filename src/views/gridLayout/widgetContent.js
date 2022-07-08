import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import _ from 'lodash'

import Weather from "@src/views/schneider/widgets/weather";
import TimeLine from "@src/views/schneider/widgets/timeLine";
import EnergyUse from "@src/views/schneider/widgets/energyUse";
import EnergyUse2 from "@src/views/schneider/widgets/energyUse2";
import GreenKPIs from "@src/views/schneider/widgets/greenKPIs";
import RealtimeAlarm from "@src/views/schneider/widgets/realtimeAlarm";
import Default from "@src/views/schneider/widgets/default";

// Modal
import ModalSetting from './modal/Setting'

import styled from "styled-components";

const WidgetContent = ({ idx }) => {
	const [widgetDetail, setWidgetDetail] = useState(null)
	const [isOpenSetting, setIsOpenSetting] = useState(false)

	const store = useSelector(state => state.gridLayout);

	const handleModalSetting = () => {
		setIsOpenSetting(prev => !prev)
	}

	const onClickSetting = () => {
		setIsOpenSetting(prev => !prev)
	}

	useEffect(() => {
		setWidgetDetail(_.find(store.tmpWidgetDetail, {idx: idx}))
	}, [store])

	const renderDOM = () => {
	  let returnComponent = null;

		switch (widgetDetail.type) {
			case 'weather':
				returnComponent = <Weather widgetDetail={widgetDetail} onClickSetting={onClickSetting} />
				break;
			case 'reatimeAlarm':
				returnComponent = <RealtimeAlarm widgetDetail={widgetDetail} onClickSetting={onClickSetting} />
				break;
			case 'energyUse':
				returnComponent = <EnergyUse widgetDetail={widgetDetail} onClickSetting={onClickSetting} />
				break;
			case 'timeLine':
				returnComponent = <TimeLine widgetDetail={widgetDetail} onClickSetting={onClickSetting} />
				break;
			case 'energyUse2':
				returnComponent = <EnergyUse2 widgetDetail={widgetDetail} onClickSetting={onClickSetting} />
				break;
			case 'greenKPIs':
				returnComponent = <GreenKPIs widgetDetail={widgetDetail} onClickSetting={onClickSetting} />
				break;
			default:
				returnComponent = <Default widgetDetail={widgetDetail} onClickSetting={onClickSetting} />
				break;
			}

	  return returnComponent
	}

	if (!widgetDetail) return;  
	return (
		<>
			{renderDOM()}
			<ModalSetting open={isOpenSetting} handleModal={handleModalSetting} idx={idx}/>
		</>
	)
}

export default WidgetContent

const TopButtonsBox = styled.div`
	> button + button {
		margin-left: .5rem;
	}
`