import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollections } from '../../features/shop/shopSlice'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview'
import './CollectionOverview.scss'

const CollectionOverview = () => {
    const collections = useSelector(selectCollections)
  return (
    <div className='collection-overview'>
        {collections.map(({id, ...otherItems}) => (
            <CollectionPreview key={id} {...otherItems}/>
        ))}
    </div>
  )
}

export default CollectionOverview