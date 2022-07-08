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

const WidgetContent = () => {
	const [widgetDetail, setWidgetDetail] = useState([])

	const store = useSelector(state => state.gridLayout);

	useEffect(() => {
		console.log('store2', store);
	}, [])

	const getComponent = (type) => {
	  let returnComponent = null;

		switch (type) {
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

	return store.widget.map((item) => {
		return (
			<div key={(item.idx).toString()}>
				{getComponent(_.find(store.tmpWidgetDetail, {idx: item.widgetIdx}).type)}
			</div>
		)
	})
}

export default WidgetContent
