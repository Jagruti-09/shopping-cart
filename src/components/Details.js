import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'; // Import the styles
import { Cart } from '../Context';
import 'bootstrap/dist/css/bootstrap.min.css';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const {cart,setCart} = useContext(Cart);

  useEffect(() => {
    // Fetch individual product details based on id
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((p) => p.id === parseInt(id));
        setProduct(selectedProduct);
      });
  }, [id]);

//   // Function to handle adding the product to the cart
//   const addToCart = () => {
//     // You might want to use a state management solution (e.g., Redux or Context) for handling the cart state globally
//     // For simplicity, let's assume you have a local cart state in this component
//     // Update the cart state or perform any additional actions you need
//     console.log('Product added to cart:', product);
//     setIsInCart(true);
//   };

//   // Function to handle removing the product from the cart
//   const removeFromCart = () => {
//     // Update the cart state or perform any additional actions you need
//     console.log('Product removed from cart:', product);
//     setIsInCart(false);
//   };
  // Helper function to render nested descriptions
  const renderDescriptions = (descriptions) => {
    return (
      <ul >
        {Object.entries(descriptions).map(([key, value]) => (
          <li key={key} className="detail-item">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    );
  };
  
  return (
    <div className="container">
      {product ? (
        <div className='details'>
          <h2 className='title'>{product.name}</h2>
          
          <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
          <p className='price'>Price: ${product.price}</p>

          {renderDescriptions(product.description)}

          {cart.includes(product)? (
            <button type="button" class="btn btn-outline-primary" className='add' onClick={() => {
            setCart(cart.filter((c)=> c.id!==product.id));
        }}>Remove from Cart</button>
        ) : (
            <button type="button" class="btn btn-outline-primary" className='add' onClick={() => {
                setCart([...cart, product]);
            }}>Add to Cart</button>
        )
        }
        </div>
       ) : ( 
        <p>Loading...</p>
      )} 
    </div>
  );
}

export default Details;