/* eslint-disable no-return-assign */
/* eslint-disable prefer-const */
/* eslint-disable quote-props */
import { useState, useCallback, useEffect, useRef,  } from 'react';

import Cytoscape from 'cytoscape'
import CytoscapeComponent from "react-cytoscapejs"

import COSEBilkent from 'cytoscape-cose-bilkent'
import dagre from 'cytoscape-dagre'
import klay from 'cytoscape-klay'
import popper from 'cytoscape-popper';
import cola from 'cytoscape-cola';
import { eventTupleToStore } from '@fullcalendar/core';
import { Button } from 'reactstrap';

Cytoscape.use(popper);
Cytoscape.use(COSEBilkent); //cose-bilkent
Cytoscape.use(dagre);
Cytoscape.use(klay);
Cytoscape.use(cola);

const distoryAllPopper = (cy) => {
	if (!cy) return;

	cy.nodes().forEach(ele => {
		if (ele.data().popper && !ele.data().click) {
			ele.data().popper.destroy();
			ele.data().popper.state.elements.popper.classList.add('display-none')
		}
	})

	// let list = document.getElementsByClassName('popper-div');
	// for (let i = 0; i < list.length; i++) {
	// 	list[i].remove();
	// }
}

const Floor1 = ({ useLayout, onClickBack }) => {
	const [cyObject, setCyObject] = useState(null);

	const elements = {
		nodes: [
			{ group: 'nodes', data: { id: '1', label: 'RACK-01', image: 'rack', temp: '26', humi: '45' } },
					{ group: 'nodes', data: { id: '1.1', label: 'SV-101', image: 'server', temp: '22', humi: '45' } },
					{ group: 'nodes', data: { id: '1.2', label: 'SV-102', image: 'server', temp: '23', humi: '46' } },
					{ group: 'nodes', data: { id: '1.3', label: 'SV-103', image: 'server', temp: '24', humi: '47' } },
					{ group: 'edges', data: { source: '1', target: '1.1', label: 'Rack-01 > SV-101' } },
					{ group: 'edges', data: { source: '1', target: '1.2', label: 'Rack-01 > SV-102' } },
					{ group: 'edges', data: { source: '1', target: '1.3', label: 'Rack-01 > SV-103' } },
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
				'background-opacity': 0,
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

	const layout = {
		name: useLayout ? useLayout : 'dagre',
		cols: 10,
  };

	const cyCallback = useCallback((cy) => {
		if (cyObject) return;

		// cy.zoomingEnabled(false);
		// cy.panningEnabled(false);
		// cy.autolock(true);
		// cy.center();

		const makePopper = ele => {
			if (ele.data().popper) return;

			const oPopper = ele.popper({
				content: function() {
					const div = document.createElement('div');
					div.classList.add('popper-div');
					div.innerHTML = `<p>온도: ${ele.data().temp}°C</p><p>습도: ${ele.data().humi}%</p>`;
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

			ele.data('popper', oPopper);
		}

		// cy.on('click', 'node', (evt) => {
		// 	if (evt.target.data().id === '1') {
		// 		distoryAllPopper(cy);
		// 		cy.remove('node');

		// 		cy.layout(layout).stop();
		// 		cy.add([
		// 			{ group: 'nodes', data: { id: '1', label: 'RACK-01', image: 'rack', temp: '26', humi: '45' } },
		// 			{ group: 'nodes', data: { id: '1.1', label: 'SV-101', image: 'server', temp: '22', humi: '45' } },
		// 			{ group: 'nodes', data: { id: '1.2', label: 'SV-102', image: 'server', temp: '23', humi: '46' } },
		// 			{ group: 'nodes', data: { id: '1.3', label: 'SV-103', image: 'server', temp: '24', humi: '47' } },
		// 			{ group: 'edges', data: { source: '1', target: '1.1', label: 'Rack-01 > SV-101' } },
		// 			{ group: 'edges', data: { source: '1', target: '1.2', label: 'Rack-01 > SV-102' } },
		// 			{ group: 'edges', data: { source: '1', target: '1.3', label: 'Rack-01 > SV-103' } },
		// 		])

		// 		cy.nodes().forEach(ele => {
		// 			makePopper(ele);
		// 		});

		// 		cy.center();
		// 		cy.layout({name: 'dagre'}).run();
		// 	}
		// })

		cy.nodes().forEach(ele => {
			makePopper(ele);
		});

		setCyObject(cy);
	}, [cyObject]);

	useEffect(() => {
		return () => {
			distoryAllPopper(cyObject);
		}
	}, [cyObject])

	return (
		<>
			<Button onClick={onClickBack}>뒤로</Button>
			<CytoscapeComponent
				elements={CytoscapeComponent.normalizeElements(elements)}
				stylesheet={stylesheet}
				cy={cyCallback}
				layout={layout}
				className='smarty_cytoscape'
			/>
		</>
	)
}

export default Floor1
