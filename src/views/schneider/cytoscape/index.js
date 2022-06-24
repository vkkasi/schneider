/* eslint-disable quote-props */
import { useState, useCallback,  } from 'react';

import Cytoscape from 'cytoscape'
import CytoscapeComponent from "react-cytoscapejs"

import COSEBilkent from 'cytoscape-cose-bilkent'
import dagre from 'cytoscape-dagre'
import klay from 'cytoscape-klay'

Cytoscape.use(COSEBilkent); //cose-bilkent
Cytoscape.use(dagre);
Cytoscape.use(klay);

const CytoscapeMain = ({useLayout}) => {
	const [cyObject, setCyObject] = useState(null);
	
	const elements = {
		nodes: [
			{ data: { id: '1.0', label: '1F-RACK-01', image: 'server' } },
			{ data: { id: '2.0', label: 'SV-101', image: 'storage' } },
			{ data: { id: '2.1', label: 'SV-102', image: 'ups' } },
			{ data: { id: '2.2', label: 'SV-103', image: 'firewall' } },
			{ data: { id: '2.3', label: 'SV-104', image: 'server' } },
			{ data: { id: '1.1', label: '1F-RACK-02', image: 'server' } },
			{ data: { id: '2.4', label: 'SV-201', image: 'firewall' } },
			{ data: { id: '2.5', label: 'SV-202', image: 'server' } },
			{ data: { id: '1.2', label: '1F-RACK-02', image: 'server' } },
			{ data: { id: '2.6', label: 'SV-301', image: 'firewall' } },
			{ data: { id: '2.7', label: 'SV-302', image: 'server' } },
			{ data: { id: '2.8', label: 'SV-303', image: 'server' } },
		],
		edges: [
			// { data: { source: '1.0', target: '1.1', label: 'from 1.0 to 1.1' } },
			{ data: { source: '1.0', target: '2.0', label: 'from 1.0 to 2.0' } },
			{ data: { source: '1.0', target: '2.1', label: 'from 1.0 to 2.1' } },
			{ data: { source: '1.0', target: '2.2', label: 'from 1.0 to 2.2' } },
			{ data: { source: '1.0', target: '2.3', label: 'from 1.0 to 2.3' } },
			{ data: { source: '1.1', target: '2.4', label: 'from 1.1 to 2.4' } },
			{ data: { source: '1.1', target: '2.5', label: 'from 1.1 to 2.5' } },
			{ data: { source: '1.2', target: '2.6', label: 'from 1.2 to 2.6' } },
			{ data: { source: '1.2', target: '2.7', label: 'from 1.2 to 2.7' } },
			{ data: { source: '1.2', target: '2.8', label: 'from 1.2 to 2.8' } },
		]
	};
	
	const stylesheet = [
		{
			selector: 'node',
			style: {

				'width': 20,
				'height': 20,
				'shape': 'rectangle',
				'label': "data(label)",
				'font-size': '.5em',
				'color': '#fff',
				'background-fit': 'cover',
				'background-opacity': 0
			}
		},
		{
			selector: "edge",
			style: {
				'label': 'data(label)',
				'width': 1,
				'font-size': '.5em',
				'color': '#fff',
				// "curve-style": "taxi",
				// "taxi-direction": "downward",
				// "taxi-turn": 10,
				// "taxi-turn-min-distance": 5
			}
		},
		{
			selector: "node[image='server']",
			css: {
				'background-image': '/images/icons/network/server.png'
			}
		},
		{
			selector: "node[image='storage']",
			css: {
				'background-image': '/images/icons/network/storage.png'
			}
		},
		{
			selector: "node[image='ups']",
			css: {
				'background-image': '/images/icons/network/ups.png'
			}
		},
		{
			selector: "node[image='firewall']",
			css: {
				'background-image': '/images/icons/network/firewall.png'
			}
		},
	]

	console.log(useLayout ? useLayout : 'dagre');

	
	const layout = { name: useLayout ? useLayout : 'dagre' };

	const cyCallback = useCallback((cy) => {
		if (cyObject) return;
		console.log('cy', cy)
		cy.on('click', 'node', (e) => {
			console.log('노드 클릭', e);
		})
		setCyObject(cy);
	}, [cyObject]);

	return (
		<div style={{minHeight: '500px'}}>
			<CytoscapeComponent
				elements={CytoscapeComponent.normalizeElements(elements)}
				stylesheet={stylesheet}
				cy={cyCallback}
				layout={layout}
				className='smarty_cytoscape'
			/>
		</div>
	)
}
export default CytoscapeMain
