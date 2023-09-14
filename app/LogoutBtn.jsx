'use client'
import { signOut } from 'next-auth/react';
import React from 'react';

const LogoutBtn = () => {
   return (
      <span className='login-span' onClick={()=>{signOut()}}> 
         logout
      </span>
   );
};

export default LogoutBtn;