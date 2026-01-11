import React from 'react'
import HomeLandingPage from './HomeSection/HomeLandingPage'
import WhatWeDo from './HomeSection/WhatWeDo'
import SlideringProjects from '../../Components/SlideringProjects'
import Thinghappen from '../../Components/Thinghappen'
import Testonomisla from '../../Components/Testonomisla'
import Marquee from '../../Components/Marquee'
import Stayuptodate from '../../Components/Stayuptodate'
import Getintouch from '../../Components/Getintouch'

const Home = () => {
  return (
    <div className='   w-full'>
        <HomeLandingPage/>
        <WhatWeDo/>
        <div className=' bg-black'>
        <SlideringProjects/>
        <Thinghappen/>
        </div>
        <Testonomisla/>
        <Marquee/>
        <Stayuptodate/>
        <Getintouch/>

      
    </div>
  )
}

export default Home
