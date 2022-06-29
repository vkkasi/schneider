/* eslint-disable prefer-const */
/* eslint-disable quote-props */
import { useState, useCallback,  } from 'react';

import Cytoscape from 'cytoscape'
import CytoscapeComponent from "react-cytoscapejs"

import COSEBilkent from 'cytoscape-cose-bilkent'
import dagre from 'cytoscape-dagre'
import klay from 'cytoscape-klay'
import popper from 'cytoscape-popper';

Cytoscape.use(COSEBilkent); //cose-bilkent
Cytoscape.use(dagre);
Cytoscape.use(klay);
Cytoscape.use(popper);
Cytoscape.use(cola);

const CytoscapeMain = ({useLayout}) => {
	const [cyObject, setCyObject] = useState(null);
	
	const elements = {
		nodes: [
			{ data: { id: '1', label: 'RACK-01', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '2', label: 'RACK-02', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '3', label: 'RACK-03', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '4', label: 'RACK-04', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '5', label: 'RACK-05', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '6', label: 'RACK-06', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '7', label: 'RACK-07', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '8', label: 'RACK-08', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '9', label: 'RACK-09', image: 'rack', temp: '38', humi: '62' } },
			// { data: { id: '2.1', label: 'SV-102', image: 'ups' } },
			// { data: { id: '2.2', label: 'SV-103', image: 'firewall' } },
			// { data: { id: '2.3', label: 'SV-104', image: 'server' } },
			// { data: { id: '1.1', label: '1F-RACK-02', image: 'server' } },
			// { data: { id: '2.4', label: 'SV-201', image: 'firewall' } },
			// { data: { id: '2.5', label: 'SV-202', image: 'server' } },
			// { data: { id: '1.2', label: '1F-RACK-02', image: 'server' } },
			// { data: { id: '2.6', label: 'SV-301', image: 'firewall' } },
			// { data: { id: '2.7', label: 'SV-302', image: 'server' } },
			// { data: { id: '2.8', label: 'SV-303', image: 'server' } },
		],
		edges: [
			// { data: { source: '1.0', target: '1.1', label: 'from 1.0 to 1.1' } },
			// { data: { source: '1.0', target: '2.0', label: 'from 1.0 to 2.0' } },
			// { data: { source: '1.0', target: '2.1', label: 'from 1.0 to 2.1' } },
			// { data: { source: '1.0', target: '2.2', label: 'from 1.0 to 2.2' } },
			// { data: { source: '1.0', target: '2.3', label: 'from 1.0 to 2.3' } },
			// { data: { source: '1.1', target: '2.4', label: 'from 1.1 to 2.4' } },
			// { data: { source: '1.1', target: '2.5', label: 'from 1.1 to 2.5' } },
			// { data: { source: '1.2', target: '2.6', label: 'from 1.2 to 2.6' } },
			// { data: { source: '1.2', target: '2.7', label: 'from 1.2 to 2.7' } },
			// { data: { source: '1.2', target: '2.8', label: 'from 1.2 to 2.8' } },
		]
	};
	
	const stylesheet = [
		{
			selector: 'node',
			style: {
				'width': 100,
				'height': 100,
				'shape': 'rectangle',
				'label': "data(label)",
				'font-size': '1em',
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
		{
			selector: "node[image='rack']",
			css: {
				'background-image': '/images/icons/network/rack.png'
			}
		},
	]

	const layout = { name: useLayout ? useLayout : 'dagre' };

	const cyCallback = useCallback((cy) => {
		if (cyObject) return;

		cy.on('click', 'node', (evt) => {
			if (evt.target.data().id === '1') {
				cy.add([
					{ group: 'nodes', data: { id: '1.1', label: 'SV-102', image: 'server' } },
					{ group: 'nodes', data: { id: '1.2', label: 'SV-103', image: 'server' } },
					{ group: 'nodes', data: { id: '1.3', label: 'SV-104', image: 'server' } },
					{ group: 'edges', data: { source: '1', target: '1.1' } },
					{ group: 'edges', data: { source: '1', target: '1.2' } },
					{ group: 'edges', data: { source: '1', target: '1.3' } },
				])
				cy.center();
			}
		})

		const makePopper = ele => {
			const oPopper = ele.popper({
				content: function() {
					const div = document.createElement('div');
					div.classList.add('popper-div');
					div.innerHTML = `<p>온도: ${ele.data().temp}도</p><p>습도: ${ele.data().humi}%</p>`;
					document.body.appendChild(div);

					return div;
				},
				popper: {}
			});

			ele.on('position', () => {
				oPopper.update();
			});

			ele.cy().on('pan zoom resize', () => {
				oPopper.update();
			})
		};

		cy.elements().forEach(ele => {
			makePopper(ele);
		});

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
