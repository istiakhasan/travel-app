import React, { useState } from 'react'
import { Form} from 'react-bootstrap'
import './Login.css'
import Menubar from '../MenuBar/Menubar'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseconfig';
import { FacebookAuthProvider,updateProfile,GoogleAuthProvider, getAuth, signInWithPopup,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { ProductState } from '../Context/Context';
import { useLocation, useNavigate } from 'react-router';
const app = initializeApp(firebaseConfig);
const googleprovider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();


const Login = () => {
    const {loggedInUser,setLoggedInUser}=ProductState()
    const history = useNavigate()
    const location=useLocation()
    let {from} =location.state || {from:{pathname:"/"}};
    
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

    const googlSignIn=()=>{
        const auth = getAuth();
        signInWithPopup(auth, googleprovider)
          .then((res) => {
            history(from)
              const {displayName,photoURL,email}=res.user
              const signedInUser={
                  isSignedIn:true,
                  name:displayName,
                  email:email,
                  photo:photoURL
                  
              }

             
              setLoggedInUser(res.user)

              setUser(signedInUser)
            
           
            
          }).catch((error) => {
           console.log(error)
           console.log(error.message)
          });

  

    }


    // signout handle *********************************************************************** 
    const signOuthandle=()=>{
        const auth = getAuth();
signOut(auth)
.then((res) => {
    const signedOutUser={
        isSignedIn:false,
        name:'',
        photo:'',
        email:''
        
    }
    setUser(signedOutUser)
 
}).catch((error) => {
 
});
    }


    // *******************handle submit or login handle***************************//
    const handlesubmit=(e)=>{
      
        if(newUser && user.firstname && user.lastname && user.email && user.password){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
              .then((res) => {
               
              const newUserInfo={...user}
              newUserInfo.error=''
              newUserInfo.createSuccess=true
              setUser(newUserInfo)
              updateInformation(user.firstname,user.lastname)
              console.log(res)
                
              
              })
              .catch((error) => {
             const newUserInfo={...user}
             newUserInfo.error="Email already exist"
             setUser(newUserInfo)                
                
              });

        }


        if(!newUser && user.email && user.password){
            const auth = getAuth();
signInWithEmailAndPassword(auth, user.email, user.password)
  .then((res) => {
    const newUserInfo={...user}
    newUserInfo.error=''
    newUserInfo.success=true
    setUser(newUserInfo)
    console.log(res)
    
   
    
  })
  .catch((error) => {
 const newUserInfo={...user}
 newUserInfo.error=error.message
 newUserInfo.success=false
 setUser(newUserInfo)
  });
        }
        e.preventDefault()
    }


    const updateInformation=(firstname,lastname)=>{
        const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: firstname+lastname, 
 
}).then(() => {
    console.log("user name update successfully ")
   
})
.catch((error) => {
  
});
    }

    // facebook sign in handle


    const handlefbsignin=()=>{
        const auth = getAuth();
signInWithPopup(auth, facebookprovider)
  .then((res) => {
    
    const user = res.user;


    
    const credential = FacebookAuthProvider.credentialFromResult(res);
    const accessToken = credential.accessToken;

  })
  .catch((error) => {
    
    console.log(error)

    
  });
    }
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
            <div onClick={handlefbsignin}  className="signinbtn"><i className="fab fa-facebook-f"></i><p>Connect With Facebook</p></div>
            <div onClick={googlSignIn} className="signinbtn"><i style={{color:"#F5A29B "}} className="fab fa-google"></i> <p>Connect With Google</p></div>

            <button onClick={signOuthandle}>signout</button>
        </div>
            
        </>
    )
}


export default Login
