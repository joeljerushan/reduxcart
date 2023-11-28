import { useDispatch, useSelector } from 'react-redux';
import './App.css';


import cartSlice from './data/cartSlice';

import productsList from './data/products.json';

import Cart from './cart';

function App() {

  const { cartProductsIds } = useSelector((state) => state.cart)

  const { addToCart, removeFromCart } = cartSlice.actions

  const dispatch = useDispatch()

  return (
    <div className="App">
      <Cart />
      <h1>Products</h1>
      <div className='productsWrap'>
      {
        productsList.products.map((single, index)=> {
          return (
            <div key={index} className="singleProduct">
              <h1>{single.name}</h1>
              <img src={single.imageUrl} alt={single.name} width={100} />
              <p>{single.description}</p>
              <p>${single.price}</p>
              {
                !cartProductsIds.includes(single.id) && (<button onClick={() => dispatch(addToCart(single.id))}>Add to Cart</button>)
              }
              
              {
                cartProductsIds.includes(single.id) && (<button onClick={() => dispatch(removeFromCart(single.id))}>Remove from cart</button>)
              }
            </div>
          )
        })
      }
      </div>

      
    </div>
  );
}

export default App;
