// Checkout.js

import React, { useContext , useState, useEffect} from 'react';
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';
import './styles.css'; // Import the styles


const Checkout = () => {
  const { cart } = useContext(Cart);
  
  const [total,setTotal] = useState();
  //const total = location.state.total;
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc+Number(curr.price),0))
  }, [cart]);

  return (
    <div>
      <h2 className='checkoutTitle'>Checkout</h2>
      <form>
        {/* Add shipping details inputs (name, address, etc.) */}
        <label className='formLabel'>
          Name:</label>
          <input type="text" name="name" />
        
        <br></br>
        <label  className='formLabel'>
          Address:</label>
            <textarea rows={1}  name="address" />
        
        {/* Add more shipping details inputs as needed */}

        {/* Display items in the cart */}
        <div className='productContainer'>
          {cart.map((product) => (
            <SingleProduct product={product} key={product.id} isCheckout />
          ))}
        </div>

        {/* Display the total price */}
        <div className='formLabel'>Total: Rs. {total}</div>
        {/* <div>Total: Rs. {total}</div> */}

        {/* Button to confirm the order */}
        <button  type="button" class="formButton btn btn-outline-primary">Confirm Order</button>
      </form>
    </div>
  );
};

// Helper function to calculate the total price
// const calculateTotal = (cart) => {
//   return cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0).toFixed(2);
// };

export default Checkout;
