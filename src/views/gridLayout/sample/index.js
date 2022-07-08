import { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { setWidget, setLayout, setOriginLayout, setPageId } from '../store'

import { Button } from "reactstrap";

// Modal
import ModalAdd from '../modal/Add'

import WidgetContent from "../widgetContent";

import styled from "styled-components";

import RGL, { WidthProvider } from "react-grid-layout"
const ReactGridLayout = WidthProvider(RGL);

const initData = [
	{ widget: { idx: 1, widgetIdx: 100 }, layout: { i: "1", x: 0, y: 0, w: 4, h: 9 } },
	{ widget: { idx: 2, widgetIdx: 102 }, layout: { i: "2", x: 4, y: 0, w: 4, h: 9 } },
	{ widget: { idx: 3, widgetIdx: 103 }, layout: { i: "3", x: 8, y: 0, w: 4, h: 9 } },
	{ widget: { idx: 4, widgetIdx: 101 }, layout: { i: "4", x: 0, y: 1, w: 12, h: 9 } },
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

	const dispatch = useDispatch();
	const store = useSelector(state => state.gridLayout)

	dispatch(setPageId('sample'));

	const handleModalAdd = () => {
		setIsOpenAdd(prev => !prev)
	}

	// 위젯 추가
	const onClickWidgetAdd = () => {
		setIsOpenAdd(prev => !prev)
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
		// console.log('store', store)
		setLocalStorage(store.pageId, store.layout);
	}, [store.layout])

	const renderDOM = () => {
		return store.widget.map((item) => {
			return (
				<div key={(item.idx).toString()}>
					<WidgetContent idx={item.widgetIdx} />
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
			<ModalAdd open={isOpenAdd} handleModal={handleModalAdd} />
		</>
	)
}

export default Sample

const TopButtonsBox = styled.div`
	> button + button {
		margin-left: .5rem;
	}
`