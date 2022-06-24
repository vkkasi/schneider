import {useState, useEffect } from 'react';

function Clock() {
	// const objDate = new Date();
	// const year = objDate.getFullYear();
	// const month = objDate.getMonth() + 1;
	// const date = objDate.getDate() + 1;
	const [today, setToday] = useState(new Date());
	// console.log(time);

	useEffect(() => {
		const id = setInterval(() => {
			setToday(new Date());
		}, 1000);
		return (() => clearInterval(id))
	}, []);

	return (
		<div className='box-clock'>
			<span>{today.toLocaleString()}</span>
		</div>
	)
}

export default Clock;