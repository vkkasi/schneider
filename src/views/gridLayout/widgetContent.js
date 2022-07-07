import { Settings } from "react-feather";
import { useEffect, useRef, useState } from "react";

import _ from 'lodash'

import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import WidgetTimeLine from "@src/views/schneider/dashboard/it/WidgetTimeLine";
import EnergyUse from "@src/views/schneider/widget/EnergyUse";
import EnergyUse2 from "@src/views/schneider/widget/EnergyUse2";
import GreenKPIs from "@src/views/schneider/widget/GreenKPIs";
import Weather from "@src/views/schneider/widget/weather";
import RealtimeAlarm from "@src/views/schneider/widget/RealtimeAlarm";
import Default from "@src/views/schneider/widget/Default";

// Modal
import ModalSetting from './modal/Setting'

import styled from "styled-components";

const initData = [
	{ idx: 100, type: 'weather', title: '날씨 위젯' },
	{ idx: 101, type: 'workSchedule', title: '작업 일정' },
]

const getLocalStorage = (key) => {
	let localStorage = {};
	if (global.localStorage) {
		try {
			localStorage = JSON.parse(global.localStorage.getItem('gridLayout')) || {};
		} catch (e) {
			console.log(e);
		}
	}

	return localStorage[key]
}

const setLocalStorage = (key, value) => {
	if (global.localStorage) {
		global.localStorage.setItem('gridLayout', JSON.stringify({
			[key]: value
		}))
	}
}

const WidgetContent = ({ idx, handleModalSetting }) => {
	const [isOpenAdd, setIsOpenAdd] = useState(false);
	const [isOpenSetting, setIsOpenSetting] = useState(false);
	const [widgetData, setWidgetData] = useState([])
	const [layout, setLayout] = useState([]);
	const [originalLayout, setOriginalLayout] = useState([]);

	// const handleModalSetting = () => {
	// 	setIsOpenSetting(prev => !prev)
	// }

	useEffect(() => {
		idx === 0 ? setWidgetData({ idx: 0, type: 'default' }) : setWidgetData(_.find(initData, {idx: idx}))
	}, [])

	const onClickSetting = () => {
		console.log('onClickSetting')
		handleModalSetting();
	}

	const renderDOM = () => {
	  let returnComponent = null;

		switch (widgetData.type) {
			case 'weather':
				returnComponent = <Weather widget={widgetData} onClickSetting={handleModalSetting} />
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
				returnComponent = <Default onClickSetting={handleModalSetting} />
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