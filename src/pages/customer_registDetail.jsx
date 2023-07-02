import React from 'react';
import Logo from '../images/BBLogoLightGradient.png';
import { Link } from 'react-router-dom';

export const CustomerRegistDetail = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-24 tracking-tighter'>
      <div className='font-bold text-[24px]'>메타마스크 연결에 성공했어요!</div>
      <div className='text-subtitle text-center mt-5'>
        안전한 배달을 위해<p className='mt-1'>고객님의 추가 정보를 입력해주세요!</p>
      </div>
      <div>
        <div className='mt-20'>
          <div className='text-gray text-caption font-bold'>닉네임</div>
          <input
            type='text'
            className='w-80 mt-2 pb-1 text-body font-bold text-black border-b-[1.5px] border-darkGray focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow'
          />
        </div>
        <div className='mt-12'>
          <div className='text-gray text-caption font-bold'>기본 배송지</div>
          <input
            type='text'
            className='w-80 mt-2 pb-1 text-body font-bold text-black border-b-[1.5px] border-darkGray focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow'
          />
        </div>
        <div className='text-caption text-purple mt-8'>비밀번호는 필요 없나요?</div>
      </div>
      <Link to='/customer/main'>
        <button className='bg-lightYellow btn-style text-black yellow-shadow mt-20'>
          주문하러 가기!
        </button>
      </Link>
      <img className='w-20 mt-20' src={Logo} alt='Logo' />
    </div>
  );
};
