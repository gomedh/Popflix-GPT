 import React, { useState } from 'react'
 import Header from './Header'
 import { BG_URL } from '../utils/constants'
 
 const Login = () => {

// ********************************* - Variables - **********************************
  const [isSignInForm, setisSignInForm] = useState(true);

// ********************************* - Methods - **********************************

   const toggleSignInForm = () => {
     setisSignInForm(!isSignInForm);
   }
  
// ********************************* - Return - **********************************
   return (
     <div>
        <Header />
        <div  className='absolute'>
          <img className="object-cover" src={BG_URL} alt="bg-img" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
          <h1 className='font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {  !isSignInForm && <input type="text" placeholder="Full Name" className=" p-4 my-4 w-full bg-gray-700"/>}
          <input type="text" placeholder="Email or phone Number" className=" p-4 my-4 w-full bg-gray-700"/>
          <input type="password" placeholder="Password" className=" p-4 my-4 w-full bg-gray-700"/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
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
 