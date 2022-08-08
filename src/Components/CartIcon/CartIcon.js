import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'
import './CartIcon.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setHidden, selectAllItems } from '../../features/cart/cartSlice'

const CartIcon = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectAllItems)

  const count = items.reduce((acculatedQuantity, item) => acculatedQuantity + item.quantity, 0)
  return (
    <div className='cart-icon' onClick={() => dispatch(setHidden())}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{count}</span>
    </div>
  )
}

export default CartIcon