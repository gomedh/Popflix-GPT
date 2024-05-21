 import React, { useState, useRef } from 'react'
 import Header from './Header'
 import { BG_URL } from '../utils/constants'
 import {checkValidateData} from "../utils/validate"
 import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
 import { auth } from "../utils/firebase";
 import { useNavigate } from 'react-router-dom'
 import { useDispatch } from 'react-redux';
 import { addUser } from '../utils/userSlice'

 const Login = () => {

// ********************************* - Variables & Hooks - **********************************
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  
  
  const email = useRef(null) // To refer the email from input
  const pswrd = useRef(null) // To refer the pswrd from input
  const userName = useRef(null) // To refer the user from input
  const navigate = useNavigate(); // TO navigate to the page on login
  const dispatch = useDispatch();

// ********************************* - Methods - **********************************

   const toggleSignInForm = () => {
     setisSignInForm(!isSignInForm);
   }

   const handleButtonClick = () => {


        // Validate the form data
        const emailValue = email.current.value;
        const pswrdValue = pswrd.current.value;
        const userNameValue = isSignInForm ? null : userName.current.value;

        const message = checkValidateData(emailValue, pswrdValue, userNameValue);
        seterrorMessage(message);

        if (message) return;
        
        // Sign-In/Up Logics
        if (!isSignInForm) {
            // Sign-Up logic
            createUserWithEmailAndPassword(auth, emailValue, pswrdValue)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: userNameValue, 
                photoURL: "https://avatars.githubusercontent.com/u/14068139?v=4"
              }).then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} =  auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate("/browse");
              }).catch((error) => {
                seterrorMessage(error.message);
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode + "-" + errorMessage);
            });
        } else {
          // Sign-In logic
                signInWithEmailAndPassword(auth, emailValue, pswrdValue)
                    .then((userCredential) => {
                      // Signed in 
                      const user = userCredential.user;
                      navigate("/browse");
                      // ...
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      seterrorMessage(errorCode + "-" + errorMessage);
                    });
        }

   }
  
// ********************************* - Return - **********************************
   return (
     <div>
        <Header />
        <div  className='absolute'>
          <img className="object-cover" src={BG_URL} alt="bg-img" />
        </div>

        <form  onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
          <h1 className='font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
         
          {  !isSignInForm && <input type="text" ref={userName} placeholder="Full Name" className=" p-4 my-4 w-full bg-gray-700"/>}
          <input ref={email} type="text" placeholder="Email or phone Number" className=" p-4 my-4 w-full bg-gray-700"/>
          <input ref={pswrd} type="password" placeholder="Password" className=" p-4 my-4 w-full bg-gray-700"/>
         
          <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>

          <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 text-gray-500'>
                {!isSignInForm ? (
                  <>
                    Already have an account? 
                    <span onClick={toggleSignInForm} className='text-white font-bold hover:cursor-pointer hover:underline'>
                      Sign In
                    </span>.
                  </>
                ) : (
                  <>
                    New to PopFlix?  
                    <span onClick={toggleSignInForm} className='text-white font-bold hover:cursor-pointer hover:underline'>
                       Sign Up Now
                    </span>.
                  </>
                )}
          </p>
        </form>
     </div>
   )
 }

 // ********************************* - Export - **********************************
 
 export default Login
 