import React from 'react'
import { Navigate,  useLocation } from 'react-router-dom';
import { ProductState } from '../Context/Context';

const PrivateRoute = ({children}) => {
    let location = useLocation();

    const {loggedInUser}=ProductState()
 
 //   if (loggedInUser.email) {
 //     return <Shipment />;
 //   }
 
   if (!loggedInUser.email) {
     return <Navigate to="/login" state={{ from: location }} />;
   }
 
   return children;
}

export default PrivateRoute
