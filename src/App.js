import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

const App = () => {
	const [category, setCategory] = useState('Laptop');
	return (
		<CategoryContext.Provider value={[category, setCategory]}>
			Category Name: {category}
			<Header></Header>
			<Home></Home>
			<Shipment></Shipment>
		</CategoryContext.Provider>
	);
};

export default App;