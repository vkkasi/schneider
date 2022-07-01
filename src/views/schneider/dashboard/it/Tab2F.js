import { Row, Col, Card, CardBody } from 'reactstrap'

import CytoscapeMain from '@src/views/schneider/cytoscape'

const Tab2F = () => {
	return (
		<Row className='match-height'>
			<Col xs='12'>
				<Card className='card-green-kpis'>
					<CardBody>
						<CytoscapeMain useLayout='' floor='2'/>
					</CardBody>
				</Card>
			</Col>
		</Row>
	)
}

export default Tab2F