import React from 'react'
import './CheckoutPage.scss'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllItems } from '../../features/cart/cartSlice'
import { selectUser } from '../../features/user/userSlice'
import CustomButton from '../../Components/Custom Button/CustomButton'

const CheckoutPage = () => {
    const cartItems = useSelector(selectAllItems)

    const total = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)

    const currentUser = useSelector(selectUser)
  return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: <span>&#8358;</span>{total}</div>

        {currentUser ? 
        (<CustomButton  checkout>Pay Now</CustomButton>) :
         (<div><Link to="/signin">Sign Up to Checkout</Link></div>)
         }
        
    </div>
  )
}

export default CheckoutPage