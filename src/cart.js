import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import productsList from './data/products.json';

import cartSlice from './data/cartSlice';

export default function Cart() {

    const { cartProductsIds } = useSelector((state) => state.cart)

    const cartProductData = productsList.products.filter(product => cartProductsIds.includes(product.id))

    const { addToCart, removeFromCart } = cartSlice.actions
    const dispatch = useDispatch()
    
    return (
        <div style={{ marginBottom: 200}}>
            <h1>Cart</h1>
            {
                cartProductData.length > 0 ? (
                    <div className='productsWrap'>
                    {
                        cartProductData.map((single, index)=> {
                        return (
                            <div key={index} className="singleProduct">
                            <h1>{single.name}</h1>
                            <img src={single.imageUrl} alt={single.name} width={100} />
                            <p>{single.description}</p>
                            <p>${single.price}</p>
                            <button onClick={() => dispatch(removeFromCart(single.id))}>Remove from cart</button>
                            </div>
                        )
                        })
                    }
                    </div>
                )
                :
                (
                    <p>No items in cart</p>
                )
            }
        </div>
    )
}
