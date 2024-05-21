import React from 'react'
import { LOGO, USER_AVATAR } from '../utils/constants'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user,'header');
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (<div className='flex p-2'>
                <img
                className='w-12 h-12'
                alt='User-ICON'
                src={user?.photoURL === null ? USER_AVATAR : user?.photoURL}
                ></img>
                <button onClick={handleSignOut} className='font-bold text-white'>(Sign-Out)</button>
            </div>)}
    </div>
  )
}

export default Header
