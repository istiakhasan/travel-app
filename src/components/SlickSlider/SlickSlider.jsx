import React from 'react'
import './slick.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { ProductState } from '../Context/Context'
import SlickSliderItem from './SlickSliderItem';


const SlickSlider = () => {
  
  const {product}=ProductState()
  
 


  return (
    <div className="row">

     {
       product.map(pd=>(
         <div className=" col-md-4  text-center">
            <SlickSliderItem key={pd.id} pd={pd} />

         </div>
         

        
        
       ))
     }

      
      
    
    </div>
  )
}

export default SlickSlider
