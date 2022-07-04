import RGL, { WidthProvider } from "react-grid-layout"

const ReactGridLayout = WidthProvider(RGL);

const GridLayoutMain = ({ onClickRack }) => {
	const layout = [
		{ i: "101", x: 3, y: 2, w: 6, h: 8, isDraggable: false, isResizable: false, title: '서버-101', sub: {temp: '16', humi: '35', power: '2532'} },
		{ i: "102", x: 9, y: 2, w: 6, h: 8, title: '서버-102', sub: {temp: '55', humi: '35', power: '2.5', color: 'bg-smarty-red'} },
		{ i: "103", x: 15, y: 2, w: 6, h: 8, title: '서버-103', sub: {temp: '18', humi: '37', power: '3.5'} },
		{ i: "104", x: 21, y: 2, w: 6, h: 8, title: '서버-104', sub: {temp: '18', humi: '37', power: '3.5'} },
		{ i: "105", x: 27, y: 2, w: 6, h: 8, title: '서버-105', sub: {temp: '18', humi: '37', power: '3.5'} },

		{ i: "111", x: 35, y: 2, w: 6, h: 8, title: '서버-111', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "112", x: 41, y: 2, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "113", x: 47, y: 2, w: 6, h: 8, title: '서버-113', sub: {temp: '43', humi: '37', power: '3.5', color: 'bg-smarty-orange'} },
		{ i: "114", x: 53, y: 2, w: 6, h: 8, title: '서버-114', sub: {temp: '18', humi: '37', power: '3.5'} },
		{ i: "115", x: 59, y: 2, w: 6, h: 8, title: '서버-115', sub: {temp: '18', humi: '37', power: '3.5'} },

		{ i: "121", x: 67, y: 2, w: 6, h: 8, title: '서버-111', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "122", x: 73, y: 2, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "123", x: 79, y: 2, w: 6, h: 8, title: '서버-113', sub: {temp: '47', humi: '37', power: '3.5', color: 'bg-smarty-orange'} },
		{ i: "124", x: 85, y: 2, w: 6, h: 8, title: '서버-114', sub: {temp: '18', humi: '37', power: '3.5'} },
		{ i: "125", x: 91, y: 2, w: 6, h: 8, title: '서버-115', sub: {temp: '18', humi: '37', power: '3.5'} },


		{ i: "201", x: 1, y: 27, w: 6, h: 8, title: '서버-101', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "202", x: 7, y: 27, w: 6, h: 8, title: '서버-102', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "203", x: 13, y: 27, w: 6, h: 8, title: '서버-103', sub: {temp: '41', humi: '37', power: '3.5', color: 'bg-smarty-orange'} },

		{ i: "211", x: 33, y: 27, w: 6, h: 8, title: '서버-111', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "212", x: 39, y: 27, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },

		{ i: "221", x: 65, y: 27, w: 6, h: 8, title: '서버-111', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "222", x: 71, y: 27, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "223", x: 77, y: 27, w: 6, h: 8, title: '서버-113', sub: {temp: '18', humi: '37', power: '3.32'} },
		{ i: "224", x: 83, y: 27, w: 6, h: 8, title: '서버-114', sub: {temp: '18', humi: '37', power: '3.52'} },


		{ i: "301", x: 21, y: 52, w: 6, h: 8, title: '서버-101', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "302", x: 27, y: 52, w: 6, h: 8, title: '서버-102', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "303", x: 33, y: 52, w: 6, h: 8, title: '서버-103', sub: {temp: '41', humi: '37', power: '3.5', color: 'bg-smarty-orange'} },

		{ i: "311", x: 43, y: 52, w: 6, h: 8, title: '서버-111', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "312", x: 49, y: 52, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },

		{ i: "321", x: 55, y: 52, w: 6, h: 8, title: '서버-111', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "322", x: 61, y: 52, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "323", x: 67, y: 52, w: 6, h: 8, title: '서버-113', sub: {temp: '18', humi: '37', power: '3.32'} },
		{ i: "324", x: 73, y: 52, w: 6, h: 8, title: '서버-114', sub: {temp: '18', humi: '37', power: '3.52'} },


		{ i: "401", x: 0, y: 77, w: 6, h: 8, title: '서버-101', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "402", x: 6, y: 77, w: 6, h: 8, title: '서버-102', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "403", x: 12, y: 77, w: 6, h: 8, title: '서버-103', sub: {temp: '61', humi: '37', power: '3.5', color: 'bg-smarty-red'} },

		{ i: "411", x: 30, y: 77, w: 6, h: 8, title: '서버-111', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "412", x: 36, y: 77, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "413", x: 42, y: 77, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "414", x: 48, y: 77, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "415", x: 54, y: 77, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "416", x: 60, y: 77, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },

		{ i: "422", x: 82, y: 77, w: 6, h: 8, title: '서버-112', sub: {temp: '16', humi: '35', power: '2.5'} },
		{ i: "423", x: 88, y: 77, w: 6, h: 8, title: '서버-113', sub: {temp: '18', humi: '37', power: '3.32'} },
		{ i: "424", x: 94, y: 77, w: 6, h: 8, title: '서버-114', sub: {temp: '18', humi: '37', power: '3.52'} },
	];

	const renderDOM = () => {
		return layout.map((item) => {
			if (item.sub) {
				return (
					<div key={item.i} onClick={() => onClickRack(item.i)}>
						<div className={`inner`}>
							<img src="/assets/rack.png"/>
							<div className={item.sub.color ? item.sub.color : ''}>
								<p>{item.sub.temp}도</p>
								<p>{item.sub.humi}%</p>
								<p>{item.sub.power}kW</p>
							</div>
						</div>
					</div>
				)
			}
		})
	}

	return (
		<ReactGridLayout
			className="grid-layout"
			layout={layout}
			cols={100}
			rowHeight={10}
			compactType={null}
			margin={[0, 0]}
		>
			{renderDOM()}
		</ReactGridLayout>
	)
}

export default GridLayoutMain