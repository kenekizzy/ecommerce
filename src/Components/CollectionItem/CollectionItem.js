import React from 'react'
import './CollectionItem.scss'
import CustomButton from '../Custom Button/CustomButton'
import { useDispatch } from "react-redux"
import { addItems } from '../../features/cart/cartSlice'

const CollectionItem = ({item}) => {
  const dispatch = useDispatch()

  const {name, imageUrl, price} = item
 
  return (
    <div className='collection-item'>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'><span>&#8358;</span>{price}</span>
        </div>
        <CustomButton onClick={() => dispatch(addItems(item))} inverted>
          Add To Cart
        </CustomButton>
    </div>
  )
}

export default CollectionItem