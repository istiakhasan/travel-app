import {Navigate,useLocation} from 'react-router-dom'
import { ProductState } from '../Context/Context';

const  PrivateRoute=({children})=> {
  const {loggedInUser}=ProductState()
 
  let location = useLocation();

  if (!loggedInUser.email) {
  
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}


export default PrivateRoute