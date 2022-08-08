import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Homepage from './Pages/Hompage/Homepage';
import Shop from './Pages/Shop/Shop';
import Navbar from './Components/Navbar/Navbar';
import SignInAndSignUp from './Pages/SigninAndSignUp/SignInAndSignUp';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import Category from './Pages/Category/Category';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'
import { useDispatch } from 'react-redux'
import { setUser, selectUser } from './features/user/userSlice'
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setUser({
            id: snapShot.id,
             ...snapShot.data()
          }))
        });
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/:id" element={<Category />}/>
          <Route path='/checkoutpage' element={<CheckoutPage />}/>
          <Route path="/signin" element={currentUser ? ( <Navigate replace to="/" />) : ( <SignInAndSignUp />) }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
