import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
//import  faker from 'faker'
import SingleProduct from './SingleProduct';
import "./styles.css"
import { Cart } from '../Context';

//faker.seed(100);

// const Home = () => {

 

 
//   const productsArray = [...Array(20)].map(() =>({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     image: faker.random.image(),
// }));


// const [products] = useState(productsArray);

//   return (
//     <div className='productContainer'>
//       {products.map((prod) => (
//         <SingleProduct prod={prod}  key={prod.id}/>
//       ))}
//     </div>
//   )
// }


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the JSON file
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    // <div>
    //   <h2>Product List</h2>
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <h3>{product.name}</h3>
    //       <p>Price: ${product.price}</p>
    //       <img src={product.image} alt={product.name} />
    //       <Link to={`/product/${product.id}`}>Details</Link>
    //     </div>
    //   ))}
    // </div>
        <div className='productContainer'>
      {products.map((product) => (
        <SingleProduct product={product}  key={product.id}/>
      ))}
    </div>
  );
}

export default Home