import React from 'react'
import CustomButton from '../Custom Button/CustomButton'
import { Link } from "react-router-dom"
import './CartDropdown.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllItems, setHidden } from '../../features/cart/cartSlice'
import CartItem from '../CartItem/CartItem'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectAllItems)
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {items.length ? (items.map(item => (
          <CartItem key={item.id} item={item}/>
        ))) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        </div>
        <Link onClick={() => dispatch(setHidden())} to="/checkoutpage">
          <CustomButton>GO TO CART</CustomButton>
        </Link>
    </div>
  )
}

export default CartDropdown