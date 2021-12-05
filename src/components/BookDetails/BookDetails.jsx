import React from 'react'
import { ProductState } from '../Context/Context'
import Menubar from '../MenuBar/Menubar'
import './bookdetails.css'
import Map from '../Map/Map'



const BookDetails = () => {
    const {cart}=ProductState()
    console.log("from book details",cart[0].cozbazar)
    let cartItem=cart[0].locationplace
    console.log("single item",cartItem)
   
    
    
    return (
       <>
      
       <div style={{display:"flex",alignItems:"center",flexDirection:"column"}} className="text-center">

       <Menubar showbtn={false}/>
      
       <hr style={{width:"60%"}} />
       <div className="container">
           <div className="row">
              
               <div className="col-md-6">
               <p style={{textAlign:"start"}}>Stay In {cart[0].name}</p>
               <div className="row">
                   {
                       cartItem.map(cti=>(
                           <div className="col-md-12 mt-3 contentwraper">
                               <div className="cartitemimg">
                                   <img src={cti.pic} alt="" />
                               </div>
                           <div className="cartitemtext">
                               <h6>{cti.title}</h6>
                                <p>{cti.desc}</p>
                                <div className="ratingandprice">

                                <p><i class="fas fa-star"></i>{cti.rating} </p>
                                <span>{cti.price}/<span style={{color:"  #8C8C8C"}}>night</span></span>
                                </div>
                           </div>
                           </div>

                       ))
                   }
               </div>
                
               </div>
               <div className="col-md-6 mt-5"> 

              <Map />
               
               
               
               </div>
           </div>
       </div>
       </div>

   
       </>
    )
}

export default BookDetails
