import { Settings } from "react-feather";
import RGL, { WidthProvider } from "react-grid-layout"
import { useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { setWidget, setLayout, setOriginLayout, setPageId } from '../store'

import _ from 'lodash'

import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import WidgetTimeLine from "../../schneider/dashboard/it/WidgetTimeLine";
import EnergyUse from "../../schneider/widget/EnergyUse";
import EnergyUse2 from "../../schneider/widget/EnergyUse2";
import GreenKPIs from "../../schneider/widget/GreenKPIs";
import Weather from "../../schneider/widget/weather";
import RealtimeAlarm from "../../schneider/widget/RealtimeAlarm";

import WidgetContent from "../widgetContent";

// Modal
import ModalAdd from '../modal/Add'
import ModalSetting from '../modal/Setting'

import styled from "styled-components";

const ReactGridLayout = WidthProvider(RGL);

// const originalData = [
// 	{ id: "1", widget: 'greenKpis', layout: { i: "1", x: 0, y: 0, w: 4, h: 9 } },
// 	{ id: "2", widget: 'weather', layout: { i: "2", x: 4, y: 0, w: 4, h: 9 } },
// 	{ id: "3", widget: 'workSchedule', layout:	{ i: "3", x: 8, y: 0, w: 4, h: 9 } },
// 	{ id: "4", widget: 'timeUseAmount', layout: { i: "4", x: 0, y: 1, w: 6, h: 9 } },
// 	{ id: "5", widget: 'timeTempHumi', layout: { i: "5", x: 6, y: 1, w: 6, h: 9 } },
// 	{ id: "6", widget: 'reatimeAlarm', layout: { i: "6", x: 0, y: 2, w: 12, h: 15 } },
// ]

const initData = [
	{ widget: {idx: 1, widgetIdx: 100}, layout: { i: "1", x: 0, y: 0, w: 4, h: 9 } },
	{ widget: {idx: 2, widgetIdx: 101}, layout: { i: "2", x: 4, y: 0, w: 4, h: 9 } },
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

const Sample = () => {
	const [isOpenAdd, setIsOpenAdd] = useState(false);
	const [isOpenSetting, setIsOpenSetting] = useState(false);

	const dispatch = useDispatch();
	const store = useSelector(state => state.gridLayout)

	dispatch(setPageId('sample'));

	// const getWidgetName = (i) => {
	// 	return _.find(widgetData, item => item.i === i).widget
	// }

	const handleModalAdd = () => {
		setIsOpenAdd(prev => !prev)
	}

	const handleModalSetting = () => {
		setIsOpenSetting(prev => !prev)
	}

	// 위젯 추가
	const onClickWidgetAdd = () => {
		const LastLayout = store.layout[store.layout.length - 1];
		// console.log('LastLayout', LastLayout)

		dispatch(setWidget([
			...store.widget,
			{ idx: parseInt(LastLayout.i) + 1, widgetIdx: 0 },
		]))

		dispatch(setLayout([
			...store.layout,
			{ i: (parseInt(LastLayout.i) + 1).toString(), x: (LastLayout.x + LastLayout.w) > 9 ? 0 : LastLayout.x + LastLayout.w, y: Infinity, w: 3, h: 9 },
		]))
	}

	// 위치 리셋
	const onClickLayoutReset = () => {
		// console.log('store.originLayout', store.originLayout);
		dispatch(setLayout(store.originLayout));
	}

	const onLayoutChange = (layout) => {
		// console.log('layout', layout);
		dispatch(setLayout(layout));
	}

	useEffect(() => {
		const localStorage = getLocalStorage(store.pageId);
		// console.log('localStorage', localStorage);

		const tmpWidget = []
		const tmpLayout = []
		for (const key in initData) {
			tmpWidget.push(initData[key].widget)
			tmpLayout.push(initData[key].layout)
		}

		dispatch(setWidget(tmpWidget));
		dispatch(setLayout(localStorage ? localStorage : tmpLayout));
		dispatch(setOriginLayout(tmpLayout));
	}, [dispatch])

	useEffect(() => {
		// console.log(store.layout)
		setLocalStorage(store.pageId, store.layout);
	}, [store.layout])

	const renderDOM = () => {
		return store.widget.map((item) => {
			return (
				<div key={(item.idx).toString()}>
					<WidgetContent idx={item.widgetIdx} handleModalSetting={handleModalSetting} />
				</div>
			)
		})
	}

	return (
		<>
			<TopButtonsBox>
				<Button onClick={() => onClickWidgetAdd()}>위젯 추가</Button>
				<Button onClick={() => onClickLayoutReset()}>위치 리셋</Button>
			</TopButtonsBox>
			
			<ReactGridLayout
				className="grid-layout-sample"
				layout={store.layout}
				cols={12}
				rowHeight={30}
				onLayoutChange={onLayoutChange}
			>
				{renderDOM()}
			</ReactGridLayout>
			{/* <ModalAdd open={isOpenAdd} handleModal={handleModalAdd} pageId={pageId} widgetData={widgetData} setWidgetData={setWidgetData} layout={layout} setLayout={setLayout} /> */}
			<ModalSetting open={isOpenSetting} handleModal={handleModalSetting} />
		</>
	)
}

export default Sample

const TopButtonsBox = styled.div`
	> button + button {
		margin-left: .5rem;
	}
`