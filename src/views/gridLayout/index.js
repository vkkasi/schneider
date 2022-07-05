import It from './it'
import Sample from './sample'

const GridLayoutMain = ({ section, onClickRack }) => {
	return (
		section === 'it' ? <It onClickRack={onClickRack} /> : <Sample />
	)
}

export default GridLayoutMain