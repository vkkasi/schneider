import { Settings } from "react-feather";
import RGL, { WidthProvider } from "react-grid-layout"
import { useEffect, useRef, useState } from "react";

import _ from 'lodash'

import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import WidgetTimeLine from "../../schneider/dashboard/it/WidgetTimeLine";
import EnergyUse from "../../schneider/widget/EnergyUse";
import EnergyUse2 from "../../schneider/widget/EnergyUse2";
import GreenKPIs from "../../schneider/widget/GreenKPIs";
import Weather from "../../schneider/widget/weather";
import RealtimeAlarm from "../../schneider/widget/RealtimeAlarm";

import ModalAdd from '../modal/Add'

const ReactGridLayout = WidthProvider(RGL);

const getComponent = (widgetName) => {
  let switchComponent;
  switch (widgetName) {
    case 'weather':
      switchComponent = <Weather />
      break;
    case 'reatimeAlarm':
      switchComponent = <RealtimeAlarm />
      break;
    case 'timeUseAmount':
      switchComponent = <EnergyUse />
      break;
    case 'workSchedule':
      switchComponent = <WidgetTimeLine />
      break;
    case 'timeTempHumi':
      switchComponent = <EnergyUse2 />
      break;
    case 'greenKpis':
      switchComponent = <GreenKPIs />
      break;
  }

  return switchComponent
}
const Sample = () => {
	const [isOpenAdd, setIsOpenAdd] = useState(false);
	const [widgetData, setWidgetData] = useState([
		{ i: "1", widget: 'greenKpis', layout: { i: "1", x: 0, y: 0, w: 4, h: 9 }},
		{ i: "2", widget: 'weather', layout: { i: "2", x: 4, y: 0, w: 4, h: 9 }, },
		{ i: "3", widget: 'workSchedule', layout:	{ i: "3", x: 8, y: 0, w: 4, h: 9 }, },
		{ i: "4", widget: 'timeUseAmount', layout: { i: "4", x: 0, y: 1, w: 6, h: 9 }, },
		{ i: "5", widget: 'timeTempHumi', layout: { i: "5", x: 6, y: 1, w: 6, h: 9 }, },
		{ i: "6", widget: 'reatimeAlarm', layout: { i: "6", x: 0, y: 2, w: 12, h: 15 }, },
	])
	const [layout, setLayout] = useState([]);

	const getWidgetName = (i) => {
		return _.find(widgetData, item => item.i === i).widget
	}

	const gridRef = useRef();

	const renderDOM = () => {
		return widgetData.map((item) => {
			return (
				<div key={item.i}>
					{getComponent(getWidgetName(item.i))}
				</div>
			)
		})
	}

	const handleModalAdd = () => {
		setIsOpenAdd(prev => !prev)
	}

	const onClickAdd = () => {
		handleModalAdd()
	}

	const onLayoutChange = (layout) => {
		setLayout(layout);
	}

	useEffect(() => {
		setLayout(_.map(widgetData, 'layout'));
	}, [widgetData])

	return (
		<>
			<Button onClick={() => onClickAdd()}>추가</Button>
			<ReactGridLayout
				className="grid-layout-sample"
				layout={layout}
				cols={12}
				rowHeight={30}
				onLayoutChange={onLayoutChange}
				ref={gridRef}
			>
				{renderDOM()}
			</ReactGridLayout>
			<ModalAdd open={isOpenAdd} handleModal={handleModalAdd} widgetData={widgetData} setWidgetData={setWidgetData}/>
		</>
	)
}

export default Sample
