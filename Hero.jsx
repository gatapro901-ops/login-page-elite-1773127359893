import React from 'react';
import { getUI } from '../uiEngine';

const Hero = () => {
  const heroUI = getUI('Hero');
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-md p-4 w-1/2 h-1/2 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold mb-4'>تسجيل الدخول</h1>
        <form>
          <input type='text' placeholder='اسم المستخدم' className='w-full p-2 mb-4 border border-gray-300 rounded-lg'/>
          <input type='password' placeholder='كلمة المرور' className='w-full p-2 mb-4 border border-gray-300 rounded-lg'/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>تسجيل الدخول</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;