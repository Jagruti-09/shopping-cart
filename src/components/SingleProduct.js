import React, { useContext } from 'react'
import { Cart } from '../Context';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {cart,setCart} = useContext(Cart);
    
  return (
    <div className='products'>
        {/* <img src={prod.image} alt={prod.name}/> */}
        <img className='productImage' src={product.image} alt={product.name} />
        <div className='productDesc'>
            {/* <span style={{fontWeight:700}}>{prod.name}</span> */}
            <span style={{fontWeight:700}}>{product.name}</span>
        <span>₹ {product.price}</span>
        
        </div>
        <Link className='links' to={`/product/${product.id}`}>Details</Link>
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

  )
}

export default SingleProduct



// SingleProduct.js

// import React, { useContext } from 'react';
// import { Cart } from '../Context';

// const SingleProduct = ({ product }) => {
//   const { cart, setCart } = useContext(Cart);

//   const handleAddToCart = () => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className='products'>
//       <img src={product.image} alt={product.name} />
//       <div className='productDesc'>
//         <span style={{ fontWeight: 700 }}>{product.name}</span>
//         <span>₹ {product.price}</span>
//         {cart.find((item) => item.id === product.id) ? (
//           <>
//             <button
//               className='add'
//               onClick={() => {
//                 const updatedCart = cart.map((item) =>
//                   item.id === product.id
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//                 );
//                 setCart(updatedCart);
//               }}
//             >
//               Increase Quantity
//             </button>
//             <button
//               className='add'
//               onClick={() => {
//                 const updatedCart = cart.map((item) =>
//                   item.id === product.id
//                     ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//                     : item
//                 );
//                 setCart(updatedCart);
//               }}
//             >
//               Decrease Quantity
//             </button>
//             <button
//               className='add'
//               onClick={() => {
//                 setCart(cart.filter((item) => item.id !== product.id));
//               }}
//             >
//               Remove from Cart
//             </button>
//           </>
//         ) : (
//           <button className='add' onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;
