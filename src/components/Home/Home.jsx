import React from 'react'
import './Home.css'

import Menubar from '../MenuBar/Menubar'
import Banner from '../Banner/Banner'
import { ProductState } from '../Context/Context'



 





const Home = () => {
   
    
    
    return (
       <div className="container-fluid home">
          

           <Menubar showbtn={true} />
           
           <Banner  />

       </div>
    )
}

export default Home
