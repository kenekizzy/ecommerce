import React from 'react'
import './CartItem.scss'

const CartItem = ({item}) => {
  return (
    <div className='cart-item'>
        <img src={item.imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{item.name}</span>
                <span className='price'>
                <span>&#8358;</span>
                    {item.quantity} x #{item.price}
                </span>
            </div>
    </div>
  )
}

export default CartItem