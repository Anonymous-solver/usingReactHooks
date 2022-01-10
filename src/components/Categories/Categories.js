import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../App";
import CategoryDetail from "../CategoryDetail/CategoryDetail";
import image1 from '../../images/laptop1.jpg'
import image2 from '../../images/laptop2.jpg'
import image3 from '../../images/laptop3.jpg'
import image4 from '../../images/mobile1.jpg'
import image5 from '../../images/mobile2.jpg'
import image6 from '../../images/mobile3.jpg'
import image7 from '../../images/cam1.jpg'
import image8 from '../../images/cam2.jpg'
import image9 from '../../images/cam3.jpg'

const allProducts = [
  { name: "Lenovo", category: "laptop", img: image1 },
  { name: "Asus", category: "laptop", img: image2 },
  { name: "Dell", category: "laptop", img: image3 },
  { name: "Samsung", category: "mobile", img: image4 },
  { name: "Oppo", category: "mobile", img: image5 },
  { name: "Nokia", category: "mobile", img: image6 },
  { name: "Nikkon", category: "camera", img: image7 },
  { name: "Sony", category: "camera", img: image8 },
  { name: "Canon", category: "camera", img: image9 },
];

const Categories = () => {
  const [category] = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const matchedProducts = allProducts.filter(
      (pd) => pd.category === category.toLowerCase()
    );
    setProducts(matchedProducts);
  }, [category]);

  return (
    <div>
      <h3>Select Your Category: {category}</h3>
      {products.map((pd) => (
        <CategoryDetail key ={pd.name} product={pd}></CategoryDetail>
      ))}
    </div>
  );
};

export default Categories;
