import React from 'react'
import { LOGO, USER_AVATAR } from '../utils/constants'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from'react-redux';
import { useEffect } from'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  // Get currently signed in user and checks the auth of the user everytime component is re-renderred
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed-in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browse")
          } else {
            // User is signed out
            dispatch(removeUser()); 
            navigate("/")
          }
        });
        return () => unSubscribe(); // kind of a event listener - Unsubscribes, when component unmounts
  }, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (<div className='flex p-2'>
                <img
                className='w-12 h-12'
                alt='User-ICON'
                src={user?.photoURL === null ? USER_AVATAR : user?.photoURL}
                ></img>
                <button onClick={handleSignOut} className='bg-red-700 text-white px-4 mx-4 my-1 rounded-lg h-12 hover:bg-red-900 hover:cursor-pointer'>Sign-Out</button>
            </div>)}
    </div>
  )
}

export default Header
