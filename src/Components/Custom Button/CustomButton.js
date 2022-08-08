import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, checkout,  ...otherProps}) => {
  return (
    <button className={`${checkout ? 'checkout': ''} ${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
  )
}

export default CustomButton