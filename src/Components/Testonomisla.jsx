import React, { useState } from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testonomisla = () => {
  const [active, setActive] = useState("left"); 

  return (
    <div className='h-screen w-full px-7  mt-30'>

      {/* left and right arrow */}
      <div className=' w-full   flex items-center justify-between'>
        <h2 className='Switzer-light uppercase text-lg'>Testimonials</h2>
        <div         onClick={() => setActive("left")}
 className="h-full gap-3  flex items-center justify-center ">
   <div
        onClick={() => setActive("left")}
        className={`h-9 w-9 rounded-full border border-black 
        flex items-center justify-center cursor-pointer transition-all duration-300
        ${active === "right" ? "opacity-40" : "opacity-100"}`}
      >    <span className=" text-sm">
    <GoArrowLeft />

    </span>
  </div>
  <div
        onClick={() => setActive("right")}
        className={`h-9 w-9 rounded-full border border-black 
        flex items-center justify-center cursor-pointer transition-all duration-300
        ${active === "left" ? "opacity-40" : "opacity-100"}`}
      >   <span className=" text-sm">
  <GoArrowRight />

    </span>
  </div>
</div>
      </div>
      


      
    </div>
  )
}

export default Testonomisla
