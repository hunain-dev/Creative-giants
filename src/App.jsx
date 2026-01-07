import React from 'react'
import Home from './pages/Home/Home'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='h-screen w-full'>
      <Home/>
      
    </div>
  )
}

export default App
