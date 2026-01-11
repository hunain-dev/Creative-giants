import React from 'react'
import Home from './pages/Home/Home'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const _locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full'>
      <Home/>
      
    </div>
  )
}

export default App
