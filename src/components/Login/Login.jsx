import React, { useState } from 'react'
import { Form} from 'react-bootstrap'
import './Login.css'
import Menubar from '../MenuBar/Menubar'

import { ProductState } from '../Context/Context';
import { useLocation, useNavigate } from 'react-router';
import { googlSignInUser, handlefbsignin, initializeLoginFramewordk, signinWithemailandpassword, createuseremailAndPassword, signOuthandle } from './LoginManager';




const Login = () => {
    initializeLoginFramewordk()
    const {loggedInUser,setLoggedInUser}=ProductState()
    let history = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const[user,setUser]=useState({
        isSignedIn:false,
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        photo:'',
        name:''
        




    })

    const [newUser,setNewUser]=useState(false)
   const handlechange=(e)=>{
        let isFromValid=true
        if(e.target.name==='email'){
            isFromValid=/\S+@\S+\.\S+/.test(e.target.value)
        }if(e.target.name==='password'){
            const isPasswordValid=e.target.value.length>6
            const passwordNubmer=/\d{1}/.test(e.target.value)
            isFromValid=isPasswordValid && passwordNubmer
        }if(isFromValid){
            const newUserInfo={...user}
            newUserInfo[e.target.name]=e.target.value
            setUser(newUserInfo)
        }
        
    }

    //google sign in start

    const googleSignIn=()=>{
        googlSignInUser()
        .then(res=>{
            setUser(res)
            setLoggedInUser(res)
            history(from, { replace: true });
        })
    }
    //google sign in ends



    //signout start
     
    const signout=()=>{
        signOuthandle()
        .then(res=>{
            setUser(res)
            setLoggedInUser(res)
        })

    }
     
    //signout ends




   


    // *******************handle submit or login handle***************************//
    const handlesubmit=(e)=>{
      
        if(newUser && user.firstname &&user.lastname && user.email && user.password){
          
            createuseremailAndPassword(user.firstname,user.lastname,user.email,user.password)
            .then(res=>{
              setUser(res)
              setLoggedInUser(res)
              history(from)
              console.log(res)
            })
          
        }


        if(!newUser && user.email && user.password){

            signinWithemailandpassword(user.email,user.password)
            .then(res=>{
              setUser(res)
              setLoggedInUser(res)
              history(from)
            })
   
        }
        e.preventDefault()
    }




    // facebook sign in start 

     const fbsignin=()=>{
        handlefbsignin()
        .then(res=>{
            setUser(res)
            setLoggedInUser(res)
            history(from, { replace: true });
        })
    }



    //facebook sign in ends



    return (
        <>
        <Menubar showbtn={false} />
        
      

      
        <div className="form-container">

           
            <div className="form-wraper">
               {
                   user.success&&<h4 className="text-center text-success">Login Succesfull </h4>
                   
               }
               {
                   user.createSuccess && <h4 className="text-center text-success">Create account succesfully</h4>
               }
            <h4 className="text-danger text-center">{user.error}</h4>
             
              <Form className="form" onClick={handlesubmit}  >
                  <p>Login</p>
                  {
                        newUser &&<>  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control onBlur={handlechange} name="firstname" className="forminput" type="text" placeholder="Enter firstname" />
                       
                         </Form.Group>
                           <Form.Group  className="mb-3" controlId="formBasicEmail">
                       
                           <Form.Control onBlur={handlechange} name="lastname" className="forminput" type="text" placeholder="Enter Lastname" />
                          
                          </Form.Group>

                       </>

                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                       
                        <Form.Control onBlur={handlechange} name="email" className="forminput" type="email" placeholder="Enter email" />
                       
                    </Form.Group>

                 

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      
                        <Form.Control onBlur={handlechange} name="password" className="forminput" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 checkboxwraper" controlId="formBasicCheckbox">
                        <Form.Check className="checkbox" type="checkbox" label="Remember me" />
                        <a href="/">Forget password</a>
                    </Form.Group>

                    <Form.Group className="mb-3 loginbtn" controlId="formBasicCheckbox">
                        
                            <button type="submit">  {newUser? "Sign up":"Login"}</button>
                        

                        
                    </Form.Group>
                    <Form.Group className="mb-3 sigunuptext" controlId="formBasicCheckbox">
                    <p>Don't have a account?<span><a onClick={()=>setNewUser(!newUser)}>{newUser? "Sign in":"Create Account"}</a></span> </p>
                      
                    </Form.Group>
                   
                    </Form>
             
            </div>
            <div onClick={fbsignin}  className="signinbtn"><i className="fab fa-facebook-f"></i><p>Connect With Facebook</p></div>
            <div onClick={googleSignIn} className="signinbtn"><i style={{color:"#F5A29B "}} className="fab fa-google"></i> <p>Connect With Google</p></div>

            <button onClick={signout}>signout</button>
        </div>
            
        </>
    )
}


export default Login
