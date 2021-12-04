
import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Book from './components/Book/Book';
import BookDetails from './components/BookDetails/BookDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
         <Router>
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route   path="/book/:bookid" element={<Book />} />
          <Route   path="/home" element={<Home />} />
          <Route   path="/login" element={<Login />} />
          <Route   path="/bookdetails" element={<PrivateRoute>

            <BookDetails />
          </PrivateRoute>
          }
          />
        </Routes>
    
      </Router> 
    
   

    </div>
  );
}

export default App;
