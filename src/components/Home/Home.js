import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
	const [category] = useContext(CategoryContext)
	return (
		<div style={{boxShadow: '1px 1px 10px gray', border: '1px solid gray', borderRadius: '10px', margin: '10px', padding: '10px'}}>
			<h2>This is home: {category}</h2>
			<Categories></Categories>
		</div>
	);
};

export default Home;