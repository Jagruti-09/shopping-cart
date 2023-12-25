import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../Context';
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom';
import './styles.css'; // Import the styles
import 'bootstrap/dist/css/bootstrap.min.css';


const CartPage = () => {

  
  const [total,setTotal] = useState();

  const {cart} = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc+Number(curr.price),0))
  }, [cart]);

  

  return (

    <div>
      <span className='cartSpan' style={{fontSize:30}}>My Cart</span>
      <br/>
      
    <div className='productContainer'>
     {cart.map((product) => (
      <SingleProduct product={product} key={product.id}/>

     ) )}
    </div>
    <span className='cartSpan'  style={{fontSize:20}}>Total: Rs. {total}</span>
    <div className='checkoutButton'>
    <Link to='/checkout'>
        <button type="button" class="btn btn-outline-primary">Proceed to Checkout</button>
      </Link>
      </div>
  
    </div>
  )
}

export default CartPage;

