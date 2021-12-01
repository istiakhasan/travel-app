import React from 'react'
import { ProductState } from '../Context/Context'

const SlickSliderItem = ({pd}) => {
    const {addToCart}=ProductState()
   
    return (
        <div onClick={()=>addToCart(pd)} className=" slideimg ">
            
        <img style={{objectFit:"cover"}} src={pd.image} alt="" />
      
      
        <p>{pd.name}</p>
       </div>
    )
}

export default SlickSliderItem
