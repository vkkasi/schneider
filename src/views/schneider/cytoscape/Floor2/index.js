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

Cytoscape.use(COSEBilkent); //cose-bilkent
Cytoscape.use(dagre);
Cytoscape.use(klay);
Cytoscape.use(popper);
Cytoscape.use(cola);

const Floor2 = ({useLayout, page}) => {
	const [cyObject, setCyObject] = useState(null);

	const refCytoscape = useRef(null);
	
	const elements = {
		nodes: [
			{ data: { id: '01', label: 'RACK-01', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '02', label: 'RACK-02', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '03', label: 'RACK-03', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '01.1', label: 'UPS-101', image: 'ups', temp: '26', humi: '45' } },
			{ data: { id: '01.2', label: 'FIREWALL-101', image: 'firewall', temp: '26', humi: '45' } },
			{ data: { id: '01.3', label: 'SERVER-101', image: 'server', temp: '26', humi: '45' } },
			{ data: { id: '02.1', label: 'SERVER-201', image: 'server', temp: '26', humi: '45' } },
			{ data: { id: '02.2', label: 'FIREWALL-201', image: 'firewall', temp: '26', humi: '45' } },
			{ data: { id: '02.3', label: 'SERVER-202', image: 'server', temp: '26', humi: '45' } },
			{ data: { id: '03.1', label: 'SERVER-301', image: 'server', temp: '26', humi: '45' } },
			{ data: { id: '03.2', label: 'FIREWALL-301', image: 'firewall', temp: '26', humi: '45' } },
		],
		edges: [
			{ data: { source: '01', target: '01.1', label: 'TCP' } },
			{ data: { source: '01', target: '01.2', label: 'SNMP' } },
			{ data: { source: '01', target: '01.3', label: 'TCP' } },
			{ data: { source: '02', target: '02.1', label: 'TCP' } },
			{ data: { source: '02', target: '02.2', label: 'TCP' } },
			{ data: { source: '02', target: '02.3', label: 'TCP' } },
			{ data: { source: '03', target: '03.1', label: 'TCP' } },
			{ data: { source: '03', target: '03.2', label: 'SNMP' } },
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

	const distoryAllPopper = () => {
		if (!cyObject) return;


		cyObject.nodes().forEach(ele => {
			ele.data().popper.destroy();
			ele.data().popper.state.elements.popper.classList.add('display-none')
		})

		let list = document.getElementsByClassName('popper-div');
		for (let i = 0; i < list.length; i++) {
			list[0].remove();
		}
	}

	const cyCallback = useCallback((cy) => {
		if (cyObject) return;

		cy.zoomingEnabled(false);

		const makePopper = ele => {
			if (ele.data().popper) return;

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

			ele.data('popper', oPopper);
		}

		cy.on('click', 'node', (evt) => {
		// 	if (evt.target.data().id === '1') {
		// 		cy.layout(layout).stop();
		// 		cy.add([
		// 			{ group: 'nodes', data: { id: '1.1', label: 'SV-101', image: 'server', temp: '22', humi: '45' } },
		// 			{ group: 'nodes', data: { id: '1.2', label: 'SV-102', image: 'server', temp: '23', humi: '46' } },
		// 			{ group: 'nodes', data: { id: '1.3', label: 'SV-103', image: 'server', temp: '24', humi: '47' } },
		// 			{ group: 'edges', data: { source: '1', target: '1.1', label: 'Rack-01 > SV-101' } },
		// 			{ group: 'edges', data: { source: '1', target: '1.2', label: 'Rack-01 > SV-102' } },
		// 			{ group: 'edges', data: { source: '1', target: '1.3', label: 'Rack-01 > SV-103' } },
		// 		])
		// 		cy.center();
		// 		cy.nodes().forEach(ele => {
		// 			makePopper(ele);
		// 		});
		// 		cy.layout(layout).run();
		// 	}
		})

		cy.nodes().forEach(ele => {
			makePopper(ele);
		});

		setCyObject(cy);
	}, [cyObject]);

	useEffect(() => {
		return () => {
			distoryAllPopper();
		}
	})

	return (
		<CytoscapeComponent
			elements={CytoscapeComponent.normalizeElements(elements)}
			stylesheet={stylesheet}
			cy={cyCallback}
			layout={layout}
			className='smarty_cytoscape'
		/>
	)
}
export default Floor2
