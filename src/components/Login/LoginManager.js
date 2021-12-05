import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './firebaseconfig';
import {
    FacebookAuthProvider,
    updateProfile,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";

export const initializeLoginFramewordk = () => {
    initializeApp(firebaseConfig);
}

//*****************Google sign in method****************** */
export const googlSignInUser = () => {
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, googleprovider)
        .then((res) => {

            const {displayName, photoURL, email} = res.user
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL

            }

            return signedInUser

        })
        .catch((error) => {
            console.log(error)
            console.log(error.message)
        });

}

//***********facebook sign in method */
export const handlefbsignin = () => {
    const facebookprovider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, facebookprovider)
        .then((res) => {

            const user = res.user;

            const credential = FacebookAuthProvider.credentialFromResult(res);
            const accessToken = credential.accessToken;

            return user

        })
        .catch((error) => {

            console.log(error)

        });
}

//****************Sign out method************ */
export const signOuthandle = () => {
    const auth = getAuth();
    return signOut(auth)
        .then((res) => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: ''

            }
            return signedOutUser

        })
        .catch((error) => {});
}

// /*********password authenticatiion or sign up with email and password
// ******** */

// export const PasswordSignUp = (firstname, lastname, email, password) => {
//     const auth = getAuth();
//     return createUserWithEmailAndPassword(auth, email, password)
//         .then((res) => {

//             const newUserInfo = res.user
//             newUserInfo.error = ""
//             newUserInfo.success = true

//             updateInformation(firstname, lastname)
//             return newUserInfo
//         })
//         .catch((error) => {
//             const newUserInfo = {}
//             newUserInfo.error = error.message
//             newUserInfo.success = false
//             return newUserInfo

//             // ..
//         });
// }
export const createuseremailAndPassword=(firstname,lastname,email,password)=>{
    const auth = getAuth();
   return  createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        
       const newUserInfo=res.user
       newUserInfo.error=""
       newUserInfo.success=true
       
      
       updateUserName(firstname,lastname)
        return newUserInfo
      })
      .catch((error) => {
        const newUserInfo={}
        newUserInfo.error=error.message
        newUserInfo.success=false
        return newUserInfo
       
        // ..
      });
  }

///*************sign in with email and password ********* */

// export const passwordSignIn = (email, password) => {
//     const auth = getAuth();
//     return signInWithEmailAndPassword(auth, email, password)
//         .then((res) => {

//             const user = res.user;
//             const newUserInfo = user
//             newUserInfo.success = true

//             return newUserInfo
            
//             // ...
//         })
//         .catch((error) => {

//             const newUserInfo =error.message
//             newUserInfo.success = false

//             return newUserInfo
            
//             // ...
//         });
// }


export const signinWithemailandpassword=(email,password)=>{
    const auth = getAuth();
   return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        
        const user = res.user;
        const newUserInfo=res.user
        newUserInfo.success=true
       
        return newUserInfo
        console.log('sign in user info',res.user)
        // ...
      })
      .catch((error) => {
    
        const newUserInfo={}
        newUserInfo.success=false
      
       
        return newUserInfo
        console.log("something wront",error)
        // ...
      });
  }

//****************update username************* */

// const updateInformation = (firstname, lastname) => {

//     const auth = getAuth();
//     updateProfile(auth.currentUser, {
//         displayName: firstname + lastname
//     })
//         .then(() => {
//             console.log('user name update succesfully')

//         })
//         .catch((error) => {});
// }


const updateUserName=(firstname,lastname)=>{
    
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: firstname+lastname
    }).then(() => {
      console.log('user name update succesfully')
     
    }).catch((error) => {
    
      
    });
      }