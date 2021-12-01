import React, { useState } from 'react'
import { Form} from 'react-bootstrap'
import './Login.css'
import Menubar from '../MenuBar/Menubar'

const Login = () => {

    const [toggle,setToogle]=useState(false)
    return (
        <>
        <Menubar showbtn={false} />
        <div className="form-container">
            <div className="form-wraper">
             
              <Form className="form">
                  <p>Login</p>
                  {
                        toggle &&<>  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control className="forminput" type="text" placeholder="Enter firstname" />
                       
                         </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                           <Form.Control className="forminput" type="text" placeholder="Enter Lastname" />
                          
                          </Form.Group>

                       </>

                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control className="forminput" type="email" placeholder="Enter email" />
                       
                    </Form.Group>

                 

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      
                        <Form.Control className="forminput" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 checkboxwraper" controlId="formBasicCheckbox">
                        <Form.Check className="checkbox" type="checkbox" label="Remember me" />
                        <a href="/">Forget password</a>
                    </Form.Group>

                    <Form.Group className="mb-3 loginbtn" controlId="formBasicCheckbox">
                        <button>Login</button>
                    </Form.Group>
                    <Form.Group className="mb-3 sigunuptext" controlId="formBasicCheckbox">
                      <p>Don't have a account?<span><a onClick={()=>setToogle(!toggle)}>{toggle?('Sign in'):('Create Account')}</a></span> </p>
                      
                    </Form.Group>
                   
                    </Form>
             
            </div>
            <div className="signinbtn"><i class="fab fa-facebook-f"></i><p>Connect With Facebook</p></div>
            <div className="signinbtn"><i style={{color:"#F5A29B "}} class="fab fa-google"></i> <p>Connect With Google</p></div>
        </div>
            
        </>
    )
}

export default Login
