import React from 'react'
import './MenuItem.scss'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({title, imageUrl, size}) => {
  let navigate = useNavigate()
  return (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
            <div className='content' onClick={() => navigate(`/shop/${title}`)}>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
  )
}

export default MenuItem