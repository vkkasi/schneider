import { Settings } from "react-feather";
import RGL, { WidthProvider } from "react-grid-layout"
import { useEffect, useState } from "react";

import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import WidgetTimeLine from "../../schneider/dashboard/it/WidgetTimeLine";
import EnergyUse from "../../schneider/widget/EnergyUse";
import EnergyUse2 from "../../schneider/widget/EnergyUse2";
import GreenKPIs from "../../schneider/widget/GreenKPIs";
import Weather from "../../schneider/widget/weather";
import RealtimeAlarm from "../../schneider/widget/RealtimeAlarm";

const ReactGridLayout = WidthProvider(RGL);

const Sample = () => {
	const [layout, setLayout] = useState([
		{ i: "101", x: 0, y: 0, w: 4, h: 9, widget : <WidgetTimeLine /> },
		{ i: "102", x: 4, y: 0, w: 4, h: 9, widget : <EnergyUse /> },
		{ i: "103", x: 8, y: 0, w: 4, h: 9, widget : <EnergyUse2 /> },
		{ i: "104", x: 0, y: 1, w: 6, h: 9, widget : <GreenKPIs /> },
		{ i: "105", x: 6, y: 1, w: 6, h: 9, widget : <Weather /> },
		{ i: "106", x: 0, y: 2, w: 12, h: 15, widget : <RealtimeAlarm /> },

		// { i: "101", x: 0, y: 0, w: 4, h: 9, widget : '<WidgetTimeLine />' },
		// { i: "102", x: 4, y: 0, w: 4, h: 9, widget : '<EnergyUse />' },
		// { i: "103", x: 8, y: 0, w: 4, h: 9, widget : '<EnergyUse2 />' },
		// { i: "104", x: 0, y: 1, w: 6, h: 9, widget : '<GreenKPIs />' },
		// { i: "105", x: 6, y: 1, w: 6, h: 9, widget : '<Weather />' },
		// { i: "106", x: 0, y: 2, w: 12, h: 15, widget : '<RealtimeAlarm />' },
	]);

	const renderDOM = () => {
		console.log(layout)
		return layout.map((item) => {
			return (
				<div key={item.i}>
					{item.widget}
				</div>
			)
		})
	}

	const onClickAdd = () => {
		console.log('layout', layout)
		setLayout([
			...layout,
			{ i: "107", x: 6, y: 3, w: 4, h: 9, widget : <Weather /> },
		]
			
			
		)
	}

	// const onLayoutChange = (layout) => {
	// 	console.log(layout)

	// }

	return (
		<>
			<Button onClick={() => onClickAdd()}>추가</Button>
			<ReactGridLayout
				className="grid-layout-sample"
				layout={layout}
				cols={12}
				rowHeight={30}
			>
				{layout.map((item) => {
					return (
						<div key={item.i}>
							{item.widget}
						</div>
					)
				})}
			</ReactGridLayout>
		</>
	)
}

export default Sample