import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice'
import directoryReducer from './features/directory/directorySlice'
import shopReducer from './features/shop/shopSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer, 
    shop: shopReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export const persistor = persistStore(store)