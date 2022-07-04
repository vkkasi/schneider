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

const Floor1 = ({useLayout}) => {
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
			{ data: { id: '10', label: 'RACK-10', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '11', label: 'RACK-11', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '12', label: 'RACK-12', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '13', label: 'RACK-13', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '14', label: 'RACK-14', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '15', label: 'RACK-15', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '16', label: 'RACK-16', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '17', label: 'RACK-17', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '18', label: 'RACK-18', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '19', label: 'RACK-19', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '20', label: 'RACK-20', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '21', label: 'RACK-21', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '22', label: 'RACK-22', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '23', label: 'RACK-23', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '24', label: 'RACK-24', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '25', label: 'RACK-25', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '26', label: 'RACK-26', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '27', label: 'RACK-27', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '28', label: 'RACK-28', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '29', label: 'RACK-29', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '30', label: 'RACK-30', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '31', label: 'RACK-31', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '32', label: 'RACK-32', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '33', label: 'RACK-33', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '34', label: 'RACK-34', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '35', label: 'RACK-35', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '36', label: 'RACK-36', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '37', label: 'RACK-37', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '38', label: 'RACK-38', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '39', label: 'RACK-39', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '40', label: 'RACK-40', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '41', label: 'RACK-41', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '42', label: 'RACK-42', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '43', label: 'RACK-43', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '44', label: 'RACK-44', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '45', label: 'RACK-45', image: 'rack', temp: '24', humi: '47' } },
			{ data: { id: '46', label: 'RACK-46', image: 'rack', temp: '26', humi: '45' } },
			{ data: { id: '47', label: 'RACK-47', image: 'rack', temp: '32', humi: '32' } },
			{ data: { id: '48', label: 'RACK-48', image: 'rack', temp: '28', humi: '55' } },
			{ data: { id: '49', label: 'RACK-49', image: 'rack', temp: '38', humi: '62' } },
			{ data: { id: '50', label: 'RACK-50', image: 'rack', temp: '24', humi: '47' } },
			// { data: { id: '6', label: 'RACK-06', image: 'rack', temp: '26', humi: '45' } },
			// { data: { id: '7', label: 'RACK-07', image: 'rack', temp: '32', humi: '32' } },
			// { data: { id: '8', label: 'RACK-08', image: 'rack', temp: '28', humi: '55' } },
			// { data: { id: '9', label: 'RACK-09', image: 'rack', temp: '38', humi: '62' } },
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
			if (evt.target.data().id === '1') {
				distoryAllPopper(cy);
				cy.remove('node');

				cy.layout(layout).stop();
				cy.add([
					{ group: 'nodes', data: { id: '1', label: 'RACK-01', image: 'rack', temp: '26', humi: '45' } },
					{ group: 'nodes', data: { id: '1.1', label: 'SV-101', image: 'server', temp: '22', humi: '45' } },
					{ group: 'nodes', data: { id: '1.2', label: 'SV-102', image: 'server', temp: '23', humi: '46' } },
					{ group: 'nodes', data: { id: '1.3', label: 'SV-103', image: 'server', temp: '24', humi: '47' } },
					{ group: 'edges', data: { source: '1', target: '1.1', label: 'Rack-01 > SV-101' } },
					{ group: 'edges', data: { source: '1', target: '1.2', label: 'Rack-01 > SV-102' } },
					{ group: 'edges', data: { source: '1', target: '1.3', label: 'Rack-01 > SV-103' } },
				])

				cy.nodes().forEach(ele => {
					makePopper(ele);
				});

				cy.center();
				cy.layout({name: 'dagre'}).run();
			}
		})

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
		<CytoscapeComponent
			elements={CytoscapeComponent.normalizeElements(elements)}
			stylesheet={stylesheet}
			cy={cyCallback}
			layout={layout}
			className='smarty_cytoscape'
		/>
	)
}

export default Floor1
