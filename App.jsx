import React from 'react';
import { heroUI, buttonUI } from './uiEngine';

const App = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      {heroUI}
      {buttonUI}
    </div>
  );
};

export default App;