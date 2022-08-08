import React  from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'
import { useSelector } from 'react-redux'
import { selectSection } from '../../features/directory/directorySlice'

const Directory = () => {
   const sections = useSelector(selectSection)
  return (
    <div className='directory'>
        {sections.map(section => (
            <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}/>
        ))}
    </div>
  )
}

export default Directory