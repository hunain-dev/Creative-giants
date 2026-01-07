import React from 'react'
import HomeLandingPage from './HomeSection/HomeLandingPage'
import WhatWeDo from './HomeSection/WhatWeDo'
import SlideringProjects from '../../Components/SlideringProjects'
import Thinghappen from '../../Components/Thinghappen'
import Testonomisla from '../../Components/Testonomisla'

const Home = () => {
  return (
    <div className='h-full w-full'>
        <HomeLandingPage/>
        <WhatWeDo/>
        <div className=' bg-black'>
        <SlideringProjects/>
        <Thinghappen/>
        </div>
        <Testonomisla/>
      
    </div>
  )
}

export default Home
