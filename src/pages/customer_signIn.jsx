import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/BBLogoLightGradient.png';
import CustomerLogo from '../images/customer_signIn.png';

export const CustomerSignIn = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-[340px] mt-28' src={Logo} alt='Logo' />
      <img className='w-32 mt-14' src={CustomerLogo} alt='customer logo' />
      <Link to='/customer/regist'>
        <button className='bg-lightYellow btn-style text-black yellow-shadow mt-14'>
          회원가입
        </button>
      </Link>
      <Link to='/customer/main'>
        <button className='bg-lightGray btn-style text-black gray-shadow mt-7'>로그인</button>
      </Link>
    </div>
  );
};
