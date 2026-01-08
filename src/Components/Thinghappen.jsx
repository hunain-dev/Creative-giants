import React from 'react'

const Thinghappen = () => {
  return (
    <div className='h-screen w-full'>
        <div className="backarea grid grid-cols-6 h-full w-full relative">
            <div className='h-full w-full  border-1 border-r-gray-800'></div>
            <div className='h-full w-full  border-1 border-r-gray-800'></div>
            <div className='h-full w-full  border-1 border-r-gray-800'></div>
            <div className='h-full w-full  border-1 border-r-gray-800'></div>
            <div className='h-full w-full  border-1 border-r-gray-800'></div>

            <div className="fontarea flex items-center justify-center gap-7 flex-col text-center h-full w-full absolute top-0 left-0 ">
                <h2 className='Switzer-light text-white uppercase text-[1.1vw]'>Get started</h2>
                <h1 className='Switzer-light text-[#FFFEF7] tracking-tight  text-7xl'>Let's make <br /> things happen.</h1>

            </div>
        </div>
      
    </div>
  )
}

export default Thinghappen
