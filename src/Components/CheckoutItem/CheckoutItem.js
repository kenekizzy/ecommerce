import React from 'react'
import './CheckoutItem.scss'
import { useDispatch } from 'react-redux'
import { clearItems, reduceItems, addItems } from '../../features/cart/cartSlice'

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch()

  return (
    <div className='checkout-item'>
    <div className='image-container'>
      <img src={cartItem.imageUrl} alt='cartItem' />
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(reduceItems(cartItem))}>&#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItems(cartItem))}>&#10095;</div>
    </span>
    <span className='price'><span>&#8358;</span>{cartItem.price}</span>
    <div className='remove-button' onClick={() => dispatch(clearItems(cartItem))}>&#10005;</div>
  </div>
  )
}

export default CheckoutItem