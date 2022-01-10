import React from 'react';

const CategoryDetail = (props) => {
	const {name, img} = props.product
	return (
		<div>
			<h4>Product Name: {name}</h4>
			<img style = {{width: '20%'}} src={img} alt="null" />
		</div>
	);
};

export default CategoryDetail;