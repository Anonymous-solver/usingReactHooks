import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
	const [category, setCategory] = useContext(CategoryContext);
	return (
		<div>
			<h5>This is Shipment</h5>
			<button onClick={() => setCategory('Laptop')}>Laptop</button>
			<button onClick={() => setCategory('Camera')}>Camera</button>
			<button onClick={() => setCategory('Mobile')}>Mobile</button>
			<h1>Category Name: {category}</h1>
		</div>
	);
};

export default Shipment;