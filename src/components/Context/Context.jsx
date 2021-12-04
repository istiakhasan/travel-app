import React, { createContext, useContext, useState } from 'react'
import {data} from '../Data/daja'

const Cart=createContext()

const Context = ({children}) => {

    const [product,setProduct]=useState(data)
    const [loggedInUser,setLoggedInUser]=useState({})
    const [cart,setCart]=useState([])

    const addToCart=(product)=>{
        const newCart=[product]
        setCart(newCart)
    }
    
    return (
        <Cart.Provider value={{product,addToCart,cart,loggedInUser,setLoggedInUser}}>

            {children}
            
        </Cart.Provider>
    )
}

export default Context

export const ProductState=()=>{
    return useContext(Cart)
}
