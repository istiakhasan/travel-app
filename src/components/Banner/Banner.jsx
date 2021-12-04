import React from 'react'
import { Link } from 'react-router-dom'
import { ProductState } from '../Context/Context'

import SlickSlider from '../SlickSlider/SlickSlider'
import './Banner.css'

const Banner = () => {



const {cart,product}=ProductState()
console.log(cart)


  


  
  
    
    return (
        <div className="row mt-5">
            <div className="col-lg-5 col-md-12 banner">

       {
          cart.length>0?(
            
                cart.map(ct=>(
                    
                    <div key={ct.id} className="banner-wraper">
    
                    
                    <h1>{ct.name} </h1>
                    <p>{ct.sortdesc}</p>
                    <Link to={"/book/"+ct.id}><button>Booking <i className="fas fa-arrow-right"></i></button> </Link>
    
                    
                    
                    </div>
                ))
                
                
                
                
                ):(

                    <div className="banner-wraper">
    
                    
                    <h1> Let's Make Your Best Trip Ever </h1>
                    <p>Plan and book your perfect trip with expert advice, travel tips,destination information and inspiration from us.</p>
               
                {
                    cart.length>0 &&<button>Booking <i className="fas fa-arrow-right"></i></button>
                    
                }     
                    
                    </div>
                )
            }
            </div>


          

           
               <div className="col-lg-7 col-md-12"> 
             

           

                       <SlickSlider />
             
            
            
            </div>
            
        </div>
    )
}

export default Banner
