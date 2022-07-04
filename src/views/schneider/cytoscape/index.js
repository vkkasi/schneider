import Floor1 from './Floor1'
import Floor2 from './Floor2'

const CytoscapeMain = ({useLayout, floor, onClickBack}) => {
	return (
		<div style={{minHeight: '500px'}}>
			{floor === '1' && <Floor1 useLayout={useLayout} onClickBack={onClickBack}/>}
			{floor === '2' && <Floor2 useLayout={useLayout}/>}
		</div>
	)
}
export default CytoscapeMain
