import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { auth } from '../../firebase/firebaseUtils';
import './Navbar.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logUserOut } from '../../features/user/userSlice';
import { selectCartState } from '../../features/cart/cartSlice'

const Navbar = () => {
    const currentUser = useSelector(selectUser)
    const cartState = useSelector(selectCartState)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        auth.signOut()
        dispatch(logUserOut())
    }
  return (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/contact">
                CONTACT
            </Link>
            {currentUser ? (<div className='option' onClick={handleLogOut}>
                SIGN OUT
            </div>) :
            (<Link className='option' to="/signin">
                SIGN IN
            </Link>)}
            <CartIcon />
        </div>
        {cartState && <CartDropdown />}
    </div>
  )
}

export default Navbar