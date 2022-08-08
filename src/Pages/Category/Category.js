import React from 'react'
import './Category.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCollections } from '../../features/shop/shopSlice'
import CollectionItem from '../../Components/CollectionItem/CollectionItem'

const Category = () => {
  const { id } = useParams()
  const collections = useSelector(selectCollections)

 const items = collections.filter(collection => collection.routeName === id)[0].items
  console.log(items)
  return (
    <div className='collection-page'>
      <h2 className='title'>{id.toUpperCase()}</h2>
      <div className='items'>
         {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))} 
      </div>
    </div>
  )
}

export default Category